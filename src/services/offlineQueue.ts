import { api } from './api';

export class OfflineQueue {
    private queue: Array<{ action: string; payload: any; timestamp: number }> = [];

    constructor() {
        const saved = localStorage.getItem('motiva_offline_queue');
        if (saved) {
            try {
                this.queue = JSON.parse(saved);
            } catch (e) {
                this.queue = [];
            }
        }
    }
    
    add(action: string, payload: any) {
        this.queue.push({ action, payload, timestamp: Date.now() });
        localStorage.setItem('motiva_offline_queue', JSON.stringify(this.queue));
    }
    
    async flush() {
        if (this.queue.length === 0) return;
        
        const pending = [...this.queue];
        for (const item of pending) {
            try {
                // @ts-ignore
                if (typeof api[item.action] === 'function') {
                    // @ts-ignore
                    await api[item.action](item.payload);
                }
                this.queue.shift();
            } catch (e) {
                console.error('Offline queue flush failed for action', item.action, e);
                break; // Stop on first error
            }
        }
        localStorage.setItem('motiva_offline_queue', JSON.stringify(this.queue));
    }
}

export const offlineQueue = new OfflineQueue();

// Add event listener for online
window.addEventListener('online', () => {
    offlineQueue.flush();
});

// Listing 5.25 - Promisfying synchronous methods, page 115

interface SyncService { 
    baseUrl: string,
    getA(): string,
}

class AsyncService
implements Promisify<SyncService> {
    baseUrl!: string;

    getA(): Promise<string> {
        return Promise.resolve('');
    }
}
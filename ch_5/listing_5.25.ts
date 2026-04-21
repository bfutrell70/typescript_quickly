// Listing 5.25 - Promisfying synchronous methods, page 115

interface SyncService { 
    baseUrl: string,
    getA(): string,
}

type ReturnPromise<T> = T extends (...args: infer A) => infer R ? (...args: A) => Promise<R>: T;

type Promisify<T> = {
    [P in keyof T]: ReturnPromise<T[P]>;
};

class AsyncService
implements Promisify<SyncService> {
    baseUrl!: string;

    getA(): Promise<string> {
        return Promise.resolve('');
    }
}


// Figure 5.6 - Combining conditional and mapped types, page 117
let service = new AsyncService();

let result = service.getA();
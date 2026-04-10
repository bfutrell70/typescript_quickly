// Listing 3.23 - Programming to an interface - page 66
interface Product {
    id: number,
    description: string
}

interface IProductService {
    getProducts(): Product[],
    getProductById(id: number): Product,
}

class ProductService implements IProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return { id: 123, description: 'Good Product' };
    }
}

class MockProductService implements IProductService {
    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }
    getProductById(id: number): Product {
        throw new Error("Method not implemented.");
    }
}

// Listing 3.24 - A factory function, page 67
function getProductService(isProduction: boolean): IProductService {
    if (isProduction) {
        return new ProductService();
    }
    else {
        return new MockProductService();
    }
}

//const prodService: IProductService;
const isProd = true;

const prodService: IProductService = getProductService(isProd);
const products = prodService.getProducts();
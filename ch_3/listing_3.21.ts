// Listing 3.21 - Programming to implementations - page 64

// a custom product type
class Product {
    id!: number;
    description!: string;
}

// a concrete implementation of ProductService
class ProductService {
    getProducts(): Product[] {
        // the code for getting products 
        // from a real data source should go here

        return [];
    }

    getProductByID(id: number): Product {
        // the code for getting a product
        // from a real data source should go here

        return { id: 123, description: 'Good Product' };
    }
}

const productService = new ProductService();
const products = productService.getProducts();

// Listing 3.22 - Another implementation of the product service - page 65
class MockProductService {
    getProducts(): Product[] {
        // the code for getting products 
        // from a real data source should go here

        return [];
    }

    getProductByID(id: number): Product {
        // the code for getting a product
        // from a real data source should go here

        return { id: 456, description: 'Not a real product' };
    }
}

class MockAnotherProductService implements ProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductByID(id: number): Product {
        return { id: 456, description: 'Not a real product' };
    }
}


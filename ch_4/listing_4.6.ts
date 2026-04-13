// Listing 4.6 - Declaring a stirng enum for monitoring actions, page 75

enum ProductsActionTypes {
    Search = 'Products Search',
    Load = 'Products Load All',
    LoadFailure = 'Products Load All Failure',
    LoadSuccess = 'Products Load All Success'
}

// if the function that loads products fails....
console.log(ProductsActionTypes.LoadFailure);

const products = [
    { id: 1, name: "Performatrin Ultra Grain-Free Original Recipe Cat Food", price: 69.99, category: "cat", subcategory: "food", url_img: [] },
    { id: 2, name: "Performatrin Ultra Wholesome Grains Lamb & Brown Rice Recipe Adult Dog Food", price: 84.99, category: "dog", subcategory: "food", url_img: [] },
    { id: 3, name: "Health Diet Cockatiel & Conure Food", price: 18.99, category: "bird", subcategory: "food", url_img: [] },
    //... more products
];


// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}
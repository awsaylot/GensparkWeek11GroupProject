package com.genspark.Pucci.Services;

import com.genspark.Pucci.Entities.Product;

import java.util.List;

public interface ProductServiceInterface {

    List<Product> getAllProducts();

    Product getProductById(int product_id);

    Product addProduct(Product product);

    Product updateProduct(Product product);

    String deleteProduct(int product_id);

}

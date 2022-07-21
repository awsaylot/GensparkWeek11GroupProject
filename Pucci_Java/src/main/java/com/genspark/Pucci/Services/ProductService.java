package com.genspark.Pucci.Services;

import com.genspark.Pucci.Daos.ProductDao;
import com.genspark.Pucci.Entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements ProductServiceInterface {

    @Autowired
    private ProductDao productDao;

    @Override
    public List<Product> getAllProducts() {
        return this.productDao.findAll();
    }

    @Override
    public Product getProductById(int product_id) {

        Optional <Product> p = this.productDao.findById(product_id);
        Product product = null;

        if (p.isPresent()) {
            product = p.get();
        } else {
            throw new RuntimeException("Product not found for id :: " + product_id);
        }
        return product;
    }

    @Override
    public Product addProduct(Product product) {
        return this.productDao.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return this.productDao.save(product);
    }

    @Override
    public String deleteProduct(int product_id) {
        System.out.println(product_id);
        this.productDao.deleteById(product_id);
        return "Product " + product_id + " has been deleted";
    }
}

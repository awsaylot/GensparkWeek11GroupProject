package com.genspark.Pucci.Services;

import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;

import java.util.List;

public interface CartServiceInterface {
    Product addToCart(User user, String product_id);
    void removeFromCart(User user, int product_id);
    void changeQuantity(User user, int product_id, int quantity);
    List<Product> getCart(User user);
}

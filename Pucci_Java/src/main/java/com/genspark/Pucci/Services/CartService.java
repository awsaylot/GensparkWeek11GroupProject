package com.genspark.Pucci.Services;

import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;

import java.util.Set;

public class CartService implements CartServiceInterface{
    @Override
    public void addToCart(User user, int product_id) {
        System.out.println(product_id);

    }

    @Override
    public void removeFromCart(User user, int product_id) {
        System.out.println(product_id);

    }

    @Override
    public void changeQuantity(User user, int product_id, int quantity) {
        System.out.println(product_id + " " + quantity);
    }

    @Override
    public Set<Product> getCart(User user) {
        System.out.println(user);
        return null;
    }
}

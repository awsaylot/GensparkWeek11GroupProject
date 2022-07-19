package com.genspark.Pucci.Services;

import com.genspark.Pucci.Daos.ProductDao;
import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CartService implements CartServiceInterface{
    @Autowired
    private ProductDao productDao;
    @Autowired
    private UserDao userDao;

    @Override
    public Product addToCart(User user, String product_id) {
        Set<Product> currentCart = user.getCart();
        if (currentCart == null) {
            currentCart = new HashSet<>();
        }
        Product productToAdd = productDao.findById(Integer.parseInt(product_id)).orElse(null);
        if (productToAdd != null) {
            currentCart.add(productToAdd);
            user.setCart(currentCart);
            userDao.save(user);
        }
        return productToAdd;
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

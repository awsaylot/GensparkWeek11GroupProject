package com.genspark.Pucci.Services;

import com.genspark.Pucci.Daos.CartDao;
import com.genspark.Pucci.Daos.ProductDao;
import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.Cart;
import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService implements CartServiceInterface{
    @Autowired
    private ProductDao productDao;
    @Autowired
    private UserDao userDao;

    @Autowired
    private CartDao cartDao;

    @Override
    public Product addToCart(User user, String product_id) {
        List<Product> currentCart = user.getCart();
        if (currentCart == null) {
            currentCart = new ArrayList<>();
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
    public void changeQuantity(User user, int product_id, int quantityToAdd) {
        int productQuantity = cartDao.getProductQuantity(user.getUser_id(), product_id);
        System.out.println(productQuantity);
        System.out.println(productQuantity + quantityToAdd);
//        Session session;
//        String getSql = String.format("SELECT quantity FROM tbl_carts WHERE user_id = %s AND product_id = %s");
//        SqlQuery query = session.createSQLQueary(getSql);
    }

    @Override
    public List<Product> getCart(User user) {
        List<Product> currentCart = user.getCart();
        if (currentCart == null) {
            currentCart = new ArrayList<>();
        }
        return currentCart;
    }
}

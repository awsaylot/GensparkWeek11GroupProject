package com.genspark.Pucci.Controllers;


import com.genspark.Pucci.Entities.Order;
import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Services.OrderServiceInterface;
import com.genspark.Pucci.Services.ProductServiceInterface;
import com.genspark.Pucci.Services.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private OrderServiceInterface orderService;

    @Autowired
    private ProductServiceInterface productService;

    @Autowired
    private UserServiceInterface userService;

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return this.orderService.getAllOrders();
    }

    @GetMapping("/orders/{order_id}")
    public Order getOrderById(@PathVariable String order_id) {
        return this.orderService.getOrderById(Integer.parseInt(order_id));
    }

    @PostMapping("/orders")
    public Order addOrder(@RequestBody Order order) {
        return this.orderService.addOrder(order);
    }


    @PutMapping("/orders")
    public Order updateOrder(@RequestBody Order order) {
        return this.orderService.updateOrder(order);
    }

    @DeleteMapping("/orders/{order_id}")
    public String deleteOrder(@PathVariable String order_id) {
        return this.orderService.deleteOrder(Integer.parseInt(order_id));
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping("/products/{product_id}")
    public Product getProductById(@PathVariable String product_id) {
        return this.productService.getProductById(Integer.parseInt(product_id));
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return this.productService.addProduct(product);
    }


    @PutMapping("/products")
    public Product updateProduct(@RequestBody Product product) {
        return this.productService.updateProduct(product);
    }


    @DeleteMapping("/products/{product_id}")
    public String deleteProduct(@PathVariable String product_id) {
        return this.productService.deleteProduct(Integer.parseInt(product_id));
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/users/{user_id}")
    public User getUserById(@PathVariable String user_id) {
        return this.userService.getUserById(Integer.parseInt(user_id));
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        return this.userService.updateUser(user);
    }

    @DeleteMapping("/users/{user_id}")
    public String deleteUser(@PathVariable String user_id) {
        return this.userService.deleteUser(Integer.parseInt(user_id));
    }

}

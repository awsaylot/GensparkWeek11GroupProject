package com.genspark.Pucci.Services;


import com.genspark.Pucci.Daos.OrderDao;
import com.genspark.Pucci.Entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements OrderServiceInterface {

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Order> getAllOrders() {
        return this.orderDao.findAll();
    }

    @Override
    public Order getOrderById(int order_id) {
        Optional <Order> o = this.orderDao.findById(order_id);
        Order order = null;

        if (o.isPresent()) {
            order = o.get();
        } else {
            throw new RuntimeException("Order not found for id :: " + order_id);
        }
        return order;
    }

    @Override
    public Order addOrder(Order order) {
        return this.orderDao.save(order);
    }

    @Override
    public Order updateOrder(Order order) {
        return this.orderDao.save(order);
    }

    @Override
    public String deleteOrder(int order_id) {
        this.orderDao.deleteById(order_id);
        return "Order " + order_id + " has been deleted";
    }
}

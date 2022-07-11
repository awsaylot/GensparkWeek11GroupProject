package com.genspark.Pucci.Services;

import com.genspark.Pucci.Entities.Order;

import java.util.List;

public interface OrderServiceInterface {

    List<Order> getAllOrders();

    Order getOrderById(int order_id);

    Order addOrder(Order order);

    Order updateOrder(Order order);

    String deleteOrder(int order_id);
}

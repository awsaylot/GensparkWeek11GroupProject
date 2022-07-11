package com.genspark.Pucci.Entities;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tbl_orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_id;

    @Autowired
    @ElementCollection
    private List<Product> purchase_list;

    private double purchase_total;

    public Order(){}

    public Order(List<Product> purchase_list, double purchase_total) {
        this.purchase_list = purchase_list;
        this.purchase_total = purchase_total;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public List<Product> getPurchase_list() {
        return purchase_list;
    }

    public void setPurchase_list(List<Product> purchase_list) {
        this.purchase_list = purchase_list;
    }

    public double getPurchase_total() {
        return purchase_total;
    }

    public void setPurchase_total(double purchase_total) {
        this.purchase_total = purchase_total;
    }
}

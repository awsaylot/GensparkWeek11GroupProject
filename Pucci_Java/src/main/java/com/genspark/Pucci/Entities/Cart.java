package com.genspark.Pucci.Entities;

import javax.persistence.*;

@Entity
@Table(name="tbl_carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cart_id;
    private int user_id;
    private int product_id;
    private int quantity;

    public Cart() {
    }

    public Cart(int user_id, int product_id) {
        this.user_id = user_id;
        this.product_id = product_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

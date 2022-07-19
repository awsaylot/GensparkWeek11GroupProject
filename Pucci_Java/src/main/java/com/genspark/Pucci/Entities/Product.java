package com.genspark.Pucci.Entities;

import javax.persistence.*;

@Entity
@Table(name="tbl_products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int product_id;

    private String name;

    private float price;

    public Product(){};

    public Product(String name, float price) {
        this.name = name;
        this.price = price;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}

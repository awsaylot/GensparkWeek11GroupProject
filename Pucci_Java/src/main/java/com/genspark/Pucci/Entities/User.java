package com.genspark.Pucci.Entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tbl_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    private String sign_in_type;

    private String name;

    private String username;

    private String password;

    private String email;

    private String phone;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Order.class)
    @JoinColumn(name="purchase_list")
    private List<Order> completed_orders;

    public User(){}

    public User(String sign_in_type, String name, String username, String password, String email, String phone) {
        this.sign_in_type = sign_in_type;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getSign_in_type() {
        return sign_in_type;
    }

    public void setSign_in_type(String sign_in_type) {
        this.sign_in_type = sign_in_type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Order> getCompleted_orders() {
        return completed_orders;
    }

    public void setCompleted_orders(List<Order> completed_orders) {
        this.completed_orders = completed_orders;
    }
}
package com.genspark.Pucci.Services;

import com.genspark.Pucci.Entities.User;

import java.util.List;

public interface UserServiceInterface {

    List<User> getAllUsers();

    User getUserById(int user_id);

    User addUser(User user);

    User updateUser(User user);

    String deleteUser(int user_id);
}

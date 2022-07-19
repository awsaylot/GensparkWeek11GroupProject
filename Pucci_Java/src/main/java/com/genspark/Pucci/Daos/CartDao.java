package com.genspark.Pucci.Daos;

import com.genspark.Pucci.Entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {
    @Query(value = "SELECT quantity FROM tbl_carts c WHERE c.user_id=:user_id AND c.product_id=:product_id", nativeQuery = true)
    int getProductQuantity(@Param("user_id") int user_id, @Param("product_id") int product_id);
}

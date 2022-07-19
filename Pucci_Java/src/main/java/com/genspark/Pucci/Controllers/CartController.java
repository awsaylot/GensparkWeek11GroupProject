package com.genspark.Pucci.Controllers;

import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Payload.request.cart.AddCartRequest;
import com.genspark.Pucci.Payload.request.cart.RemoveProduct;
import com.genspark.Pucci.Payload.request.cart.UpdateQuantityRequest;
import com.genspark.Pucci.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDao userDao;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<String> getCart(@RequestHeader("authorization") String authHeader) {
        String jwt = authHeader.split("\\s+")[1];
        String username = jwtUtils.getUserNameFromJwtToken(jwt);
        User user = this.userDao.findByUsername(username).orElse(null);
        return new ResponseEntity<String>(String.format(user.getEmail()), HttpStatus.OK);
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addToCart(@Valid @RequestBody AddCartRequest addCartRequest) {
        return new ResponseEntity<String>("Added to cart", HttpStatus.OK);
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> updateQuantity(@Valid @RequestBody UpdateQuantityRequest updateQuantityRequest) {
        return new ResponseEntity<String>("Updated quantity", HttpStatus.OK);
    }

    @DeleteMapping(value = "/remove", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> removeProduct(@Valid @RequestBody RemoveProduct removeProduct) {
        return new ResponseEntity<String>("Product deleted", HttpStatus.OK);
    }
}

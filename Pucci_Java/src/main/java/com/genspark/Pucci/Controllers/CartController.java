package com.genspark.Pucci.Controllers;

import com.genspark.Pucci.Daos.ProductDao;
import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Payload.request.cart.AddCartRequest;
import com.genspark.Pucci.Payload.request.cart.RemoveProduct;
import com.genspark.Pucci.Payload.request.cart.UpdateQuantityRequest;
import com.genspark.Pucci.Services.CartServiceInterface;
import com.genspark.Pucci.Services.ProductServiceInterface;
import com.genspark.Pucci.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private CartServiceInterface cartService;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<String> getCart(@RequestHeader("authorization") String authHeader) {
        User user = this.getUserFromHeader(authHeader);
        return new ResponseEntity<String>(String.format(user.getEmail()), HttpStatus.OK);
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addToCart(@Valid @RequestBody AddCartRequest addCartRequest, @RequestHeader("authorization") String authHeader) {
        User user = this.getUserFromHeader(authHeader);
        Set<Product> currentCart = user.getCart();
        if (currentCart == null) {
            currentCart = new HashSet<>();
        }
        currentCart.add(productDao.findById(Integer.parseInt(addCartRequest.getProduct_id())).orElse(null));
        user.setCart(currentCart);
        userDao.save(user);
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

    private User getUserFromHeader(String authHeader) {
        String jwt = authHeader.split("\\s+")[1];
        String username = jwtUtils.getUserNameFromJwtToken(jwt);
        User user = this.userDao.findByUsername(username).orElse(null);
        return user;
    }
}

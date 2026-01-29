package com.hongochai.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hongochai.backend.entity.Cart;
import com.hongochai.backend.service.CartService;

@RestController
@AllArgsConstructor
@RequestMapping("api/carts")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, 
             allowedHeaders = "*",
             methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
             exposedHeaders = "Content-Range")
public class CartController {
    private CartService CartService;
    //Create Cart REST API
    @PostMapping
    public ResponseEntity<Cart> createCart(@RequestBody Cart Cart){
        Cart savedCart = CartService.createCart(Cart);
        return new ResponseEntity<>(savedCart,HttpStatus.CREATED);
    }

    //Get Cart by id REST API 
    //http://localhost:8080/api/Carts/1
    @GetMapping("{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable("id")Long CartId){
        Cart Cart = CartService.getCartById(CartId);
        return new ResponseEntity<>(Cart,HttpStatus.OK);
    }

    //Get All Carts REST API 
    //http://localhost:8080/api/Carts
    @GetMapping
    public ResponseEntity<List<Cart>> getAllCarts(){
        List<Cart>Carts = CartService.getAllCarts();
        HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Carts.size()+"/"+Carts.size());
    return ResponseEntity.ok().headers(headers).body(Carts);
    }

    //Update Cart REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/Carts/1
    public ResponseEntity<Cart>updateCart(@PathVariable("id") Long CartId,
    @RequestBody Cart cart){
        cart.setId(CartId);
        Cart updatedCart = CartService.updateCart(cart);
        return new ResponseEntity<>(updatedCart,HttpStatus.OK);
    }
    //Delete Cart REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteCart(@PathVariable("id") Long CartId){
        CartService.deleteCart(CartId);
        return new ResponseEntity<>("Cart successfully deleted",HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        Cart savedCartItem = CartService.addToCart(cart);
        return ResponseEntity.ok(savedCartItem);
    }

}
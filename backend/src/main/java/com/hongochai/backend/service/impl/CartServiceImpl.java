package com.hongochai.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.hongochai.backend.entity.Cart;
import com.hongochai.backend.repository.CartRepository;
import com.hongochai.backend.service.CartService;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
    private CartRepository CartRepository;

    @Override
    public Cart createCart(Cart Cart) {
        return CartRepository.save(Cart);
    }

    @Override
    public Cart getCartById(Long CartId) {
        Optional<Cart> optionalCart = CartRepository.findById(CartId);
        return optionalCart.get();
    }

    @Override
    public List<Cart> getAllCarts() {
        return CartRepository.findAll();
    }

    @Override
    public Cart updateCart(Cart Cart) {
        Cart existingCart = CartRepository.findById(Cart.getId()).get();
    

        existingCart.setProduct(Cart.getProduct());
        existingCart.setQuantity(Cart.getQuantity());
        Cart updateCart = CartRepository.save(existingCart);
        return updateCart;
    }

  
    @Override
    public void deleteCart(Long CartId) {
        CartRepository.deleteById(CartId);
    }

    
    @Override
    public Cart addToCart(Cart cart) {
        return CartRepository.save(cart);
    }
}

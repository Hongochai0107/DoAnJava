package com.hongochai.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hongochai.backend.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
}

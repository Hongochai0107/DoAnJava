package com.hongochai.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hongochai.backend.entity.Orders;
public interface OrdersRepository extends JpaRepository<Orders, Long>{
    
}


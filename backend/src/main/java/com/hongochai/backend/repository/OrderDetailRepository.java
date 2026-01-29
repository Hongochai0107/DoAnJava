package com.hongochai.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hongochai.backend.entity.OrderDetail;
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long>{
    
}


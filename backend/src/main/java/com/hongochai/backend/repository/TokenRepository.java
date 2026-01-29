package com.hongochai.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hongochai.backend.entity.Token;
public interface TokenRepository extends JpaRepository<Token, Long>{
    
}


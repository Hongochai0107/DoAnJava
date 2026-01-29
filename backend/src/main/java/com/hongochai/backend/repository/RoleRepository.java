package com.hongochai.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hongochai.backend.entity.Role;
public interface RoleRepository extends JpaRepository<Role, Long>{
    
}


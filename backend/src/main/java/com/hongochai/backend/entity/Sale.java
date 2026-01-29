package com.hongochai.backend.entity;

import java.time.LocalDate;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sale")
@Entity
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;
    
    private int quantitySold;
    private String thumbnail; // Nên kiểm tra xem đường dẫn hình ảnh đúng chưa

    private LocalDate saleDate;

    // getters, setters, etc.
}
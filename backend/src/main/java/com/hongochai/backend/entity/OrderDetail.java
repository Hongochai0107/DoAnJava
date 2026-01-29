package com.hongochai.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orderdetail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column(nullable = false)
    private Integer num;

    //@Column(nullable = false)
    private Integer price;

    //@Column(nullable = false)
    private Integer total_money;

    
    @ManyToOne
    private Orders order;


    @ManyToOne
    private Product product;
}

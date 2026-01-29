package com.hongochai.backend.entity;

import java.sql.Date;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column(nullable = false)
    private Date create_at;

    private Date update_at;

    // @Column(nullable = false)
    private int deleted;

    // @Column(nullable = false)
    private String description;

    private String title;

    // @Column(nullable = false)
    private Long discount;

    // @Column(nullable = false)
    private Long price;

    // @Column(nullable = false)
    private String thumbnail;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Gallery> gallery;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderdetail;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Sale> sale;

    
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Cart> cart;

 

}

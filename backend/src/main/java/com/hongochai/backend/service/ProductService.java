package com.hongochai.backend.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.hongochai.backend.entity.Product;

public interface ProductService {
    public Product createProduct(Product product);

    public Product getProductById(Long productId);

    public Page<Product> getAllProducts(Pageable pageable);

    public Product updateProduct(Product product);

    public void deleteProduct(Long productId);

    public List<Product> getProductsByCondition(String title, Long category);

    public List<Product> getLatestProductsInCategory(Long categoryId, int pagesize);

    // public List<Product> getSale(Long categoryId, int pagesize);

    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable);


}

package com.hongochai.backend.service;

import java.util.List;

import com.hongochai.backend.entity.Sale;

public interface SaleService {
    public  Sale createSale(Sale Sale);
    public  Sale getSaleById(Long SaleId);
    public  Sale updateSale( Sale Sale);
    public  void deleteSale(Long SaleId);
    public  List <Sale> getAllSales();
    List<Sale> getRecentSales();
}



    


package com.hongochai.backend.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hongochai.backend.entity.Sale;
import com.hongochai.backend.repository.SaleRepository;
import com.hongochai.backend.service.SaleService;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SaleServiceImpl implements SaleService {

    private SaleRepository SaleRepository;

    @Override
    public Sale createSale(Sale Sale) {
        return SaleRepository.save(Sale);
    }

    @Override
    public Sale getSaleById(Long SaleId) {
        Optional<Sale> optionalSale = SaleRepository.findById(SaleId);
        return optionalSale.get();
    }

    @Override
    public List<Sale> getAllSales() {
        return SaleRepository.findAll();
    }

    @Override
    public Sale updateSale(Sale sale) {
        Sale existingSale = SaleRepository.findById(sale.getId()).get();
        existingSale.setProduct(sale.getProduct());
        existingSale.setQuantitySold(sale.getQuantitySold());
       existingSale.setSaleDate(sale.getSaleDate());
       existingSale.setThumbnail(sale.getThumbnail());
        Sale updateSale = SaleRepository.save(existingSale);
        return updateSale;
    }

    @Override
    public void deleteSale(Long SaleId) {
        SaleRepository.deleteById(SaleId);
    }

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public List<Sale> getRecentSales() {
        return saleRepository.findAllByOrderBySaleDateDesc();
    }


}

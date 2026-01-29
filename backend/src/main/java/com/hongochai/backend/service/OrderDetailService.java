package com.hongochai.backend.service;

import java.util.List;

import com.hongochai.backend.entity.OrderDetail;

public interface OrderDetailService {
    public  OrderDetail createOrderDetail(OrderDetail orderdetail);
    public  OrderDetail getOrderDetailById(Long orderdetailId);
    public  OrderDetail updateOrderDetail( OrderDetail orderdetail);
    public  void deleteOrderDetail(Long orderdetailId);
    public  List <OrderDetail> getAllOrderDetails();
}



    


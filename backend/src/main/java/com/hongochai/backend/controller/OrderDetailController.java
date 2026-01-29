package com.hongochai.backend.controller;
import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hongochai.backend.entity.OrderDetail;
import com.hongochai.backend.service.OrderDetailService;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderdetails")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, 
             allowedHeaders = "*",
             methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
             exposedHeaders = "Content-Range")
public class OrderDetailController {
    private OrderDetailService OrderDetailService;
    //Create OrderDetail REST API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail OrderDetail){
        OrderDetail savedOrderDetail = OrderDetailService.createOrderDetail(OrderDetail);
        return new ResponseEntity<>(savedOrderDetail,HttpStatus.CREATED);
    }

    //Get OrderDetail by id REST API 
    //http://localhost:8080/api/OrderDetails/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id")Long OrderDetailId){
        OrderDetail OrderDetail = OrderDetailService.getOrderDetailById(OrderDetailId);
        return new ResponseEntity<>(OrderDetail,HttpStatus.OK);
    }

    //Get All OrderDetails REST API 
    //http://localhost:8080/api/OrderDetails
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails(){
        List<OrderDetail>OrderDetails = OrderDetailService.getAllOrderDetails();
            HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ OrderDetails.size()+"/"+OrderDetails.size());
    return ResponseEntity.ok().headers(headers).body(OrderDetails);
    }

    //Update OrderDetail REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/OrderDetails/1
    public ResponseEntity<OrderDetail>updateOrderDetail(@PathVariable("id") Long OrderDetailId,
    @RequestBody OrderDetail orderDetail){
        orderDetail.setId(OrderDetailId);
        OrderDetail updatedOrderDetail = OrderDetailService.updateOrderDetail(orderDetail);
        return new ResponseEntity<>(updatedOrderDetail,HttpStatus.OK);
    }
    //Delete OrderDetail REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteOrderDetail(@PathVariable("id") Long OrderDetailId){
        OrderDetailService.deleteOrderDetail(OrderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted",HttpStatus.OK);
    }
}
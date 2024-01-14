package com.example.FoodServer.controller;

import com.example.FoodServer.entity.Food;
import com.example.FoodServer.repository.FoodRepository;
import com.example.FoodServer.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FoodController {
    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private FoodService foodService;

    public FoodController(FoodRepository foodRepository,FoodService foodService){
        this.foodRepository=foodRepository;
        this.foodService=foodService;

    }

    @GetMapping("/food")
    public ResponseEntity<?> getFood(
            @RequestParam("page") String page,
            @RequestParam("pagesize") String size,
            @RequestParam("foodname") String foodname){
        return ResponseEntity.ok().body(foodService.getFoodPagenation(
                Integer.parseInt(page),
                Integer.parseInt(size),
                foodname));
    }
}

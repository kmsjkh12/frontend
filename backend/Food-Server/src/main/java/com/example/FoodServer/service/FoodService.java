package com.example.FoodServer.service;

import com.example.FoodServer.entity.Food;
import com.example.FoodServer.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository){
        this.foodRepository=foodRepository;
    }

    public List<Food> getFood (String foodName){
        return foodRepository.SelectFoodName(foodName);
    }

    public ResponseEntity<?> getFoodPagenation(int page,int pageSize,  String foodName){
        Pageable pageable = PageRequest.of(page, pageSize);

        Page<Food> paging = foodRepository.PagingFoodName(pageable, foodName);

        return ResponseEntity.ok().body(paging);
    }
}

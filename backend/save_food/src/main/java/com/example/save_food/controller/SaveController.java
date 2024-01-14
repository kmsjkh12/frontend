package com.example.save_food.controller;

import com.example.save_food.dto.SaveDto;
import com.example.save_food.service.SaveFoodService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SaveController {
    @Autowired
    private SaveFoodService saveFoodService;
    public SaveController( SaveFoodService saveFoodService){
        this.saveFoodService=saveFoodService;
    }

    @PostMapping("/saveas")
    public ResponseEntity<?> save_data(@RequestBody SaveDto saveDto) throws JsonProcessingException {
        ObjectMapper objectMapper= new ObjectMapper();
        String content = objectMapper.writeValueAsString(saveDto);
        System.out.print(content+saveDto.getCal() +  saveDto.getFoodname());
        return ResponseEntity.ok().body(saveFoodService.save_data(saveDto));
    }

    @GetMapping("/finddata")
    public ResponseEntity<?> find_all(
            @RequestParam("userid") String userid,
            @RequestParam("mealdate") String mealdate){
        return ResponseEntity.ok().body(saveFoodService.find_all(userid, mealdate));
    }
}

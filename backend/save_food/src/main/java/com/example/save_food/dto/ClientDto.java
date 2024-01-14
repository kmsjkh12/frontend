package com.example.save_food.dto;

import com.example.save_food.entity.SaveFoodEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {

    private String userid;
    private String date;
    private List<SaveFoodEntity> morning;
    private List<SaveFoodEntity> launch;
    private List<SaveFoodEntity> dinner;



}

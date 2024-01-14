package com.example.save_food.dto;

import lombok.*;

import java.util.List;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SaveDto {
    List<SaveDto> array;
    private String userid;
    private String mealtime;
    private String mealdate;
    private String foodid;
    private String foodname;
    private int foodcount;
    private int cal;
    private String serving;
    private int syn;
    private int protein;
    private int fat;
    private int nat;
    private int energy;

}

package com.example.save_food.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "save_food")
public class SaveFoodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "userid")
    private String userid;

    @Column(name = "mealtime")
    private String mealtime;
    @Column(name = "mealdate")
    private String mealdate;
    @Column(name = "food_id")
    private String foodid;
    @Column(name = "foodname")
    private String foodname;

    @Column(name = "count")
    private int foodcount;

    @Column(name = "cal")
    private int cal;
    @Column(name = "serving")
    private String serving;


    @Column(name = "syn")
    private int syn;

    @Column(name = "protein")
    private int protein;
    @Column(name = "fat")
    private int fat;

    @Column(name = "nat")
    private int nat;
    @Column(name = "energy")
    private int energy;
}

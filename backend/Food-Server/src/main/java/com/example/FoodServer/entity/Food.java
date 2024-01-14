package com.example.FoodServer.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "food_1")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "SAMPLE_ID")
    private String id;

    @Column(name = "식품코드")
    private String foodCode;

    @Column(name = "DB군")
    private String dbBase;
    @Column(name = "식품명")
    private String foodname;
    @Column(name = "제조사")
    private String foodMaker;
    @Column(name = "식품대분류")
    private String foodCategory;

    @Column(name = "식품상세분류")
    private String foodDetailCategory;

    @Column(name = "1회제공량")
    private int foodcount;
    @Column(name = "내용량_단위")
    private String serving;
    //첫 단위가 1인분이라는 말

    @Column(name = "에너지(㎉)")
    private String cal;

    @Column(name = "단백질(g)")
    private String protein;
    @Column(name = "지방(g)")
    private String fat;

    @Column(name = "탄수화물(g)")
    private String syn;

    @Column(name = "나트륨(㎎)")
    private String nat;
}


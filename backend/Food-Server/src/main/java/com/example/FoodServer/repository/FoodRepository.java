package com.example.FoodServer.repository;

import com.example.FoodServer.entity.Food;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, String> {
    @Query("SELECT e FROM Food as e WHERE e.foodname LIKE %:foodname% AND e.protein != '-' AND e.fat != '-' And e.syn != '-'")
    List<Food> SelectFoodName(String foodname);

    @Query("SELECT e FROM Food as e WHERE e.foodname LIKE %:foodname% AND e.protein != '-' AND e.fat != '-' And e.syn != '-'")
    Page<Food> PagingFoodName(Pageable pageable, String foodname);

}

package com.example.save_food.repository;

import com.example.save_food.entity.SaveFoodEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaveFoodRepository  extends JpaRepository<SaveFoodEntity, Long> {
    @Query("select s from SaveFoodEntity as s where s.userid = :userid and s.mealdate = :mealdate ")
    List<SaveFoodEntity> findSaveFood(String userid, String mealdate);

    @Query("select s from SaveFoodEntity as s where s.userid = :userid and s.mealdate = :mealdate and s.mealtime = :mealtime")
    List<SaveFoodEntity> findSaveFood(String userid,String mealtime, String mealdate);
}

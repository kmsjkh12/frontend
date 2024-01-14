package com.example.save_food.service;

import com.example.save_food.dto.ClientDto;
import com.example.save_food.dto.SaveDto;
import com.example.save_food.entity.SaveFoodEntity;
import com.example.save_food.repository.SaveFoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaveFoodService {

    @Autowired
    private SaveFoodRepository saveFoodRepository;

    public SaveFoodService( SaveFoodRepository saveFoodRepository){
        this.saveFoodRepository=saveFoodRepository;

    }

    public ResponseEntity<?> save_data(SaveDto saveDto){

        if(saveDto.getArray() != null){
            System.out.print("hello list");
            List<SaveFoodEntity> saveas =
                    saveDto.getArray().stream().map((v)->
                            SaveFoodEntity.builder()
                                    .userid(v.getUserid())
                                    .mealtime(v.getMealtime())
                                    .mealdate(v.getMealdate())
                                    .foodid(v.getFoodid())
                                    .foodname(v.getFoodname())
                                    .foodcount(v.getFoodcount())
                                    .cal(v.getCal())
                                    .serving(v.getServing())
                                    .syn(v.getSyn())
                                    .protein(v.getProtein())
                                    .fat(v.getFat())
                                    .nat(v.getNat())
                                    .energy(v.getEnergy())
                                    .build()
                            ).collect(Collectors.toList());


            saveFoodRepository.saveAll(saveas);
        }
        if(saveDto.getArray()== null) {
            System.out.print("hello 0");

            SaveFoodEntity save = SaveFoodEntity.builder()
                    .userid(saveDto.getUserid())
                    .mealtime(saveDto.getMealtime())
                    .mealdate(saveDto.getMealdate())
                    .foodid(saveDto.getFoodid())
                    .foodname(saveDto.getFoodname())
                    .foodcount(saveDto.getFoodcount())
                    .cal(saveDto.getCal())
                    .serving(saveDto.getServing())
                    .syn(saveDto.getSyn())
                    .protein(saveDto.getProtein())
                    .fat(saveDto.getFat())
                    .nat(saveDto.getNat())
                    .energy(saveDto.getEnergy())
                    .build();

            saveFoodRepository.save(save);
        }

        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    public ResponseEntity<?> find_all(String user_id, String date){
        List<SaveFoodEntity> morning = saveFoodRepository.findSaveFood(user_id,"morning", date);
        List<SaveFoodEntity> launch = saveFoodRepository.findSaveFood(user_id,"launch", date);
        List<SaveFoodEntity> dinner=saveFoodRepository.findSaveFood(user_id,"dinner", date);


        ClientDto clientDto = new ClientDto(user_id, date, morning, launch, dinner);
        return ResponseEntity.ok().body(clientDto);
    }

}

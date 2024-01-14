package com.example.save_food;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SaveFoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(SaveFoodApplication.class, args);
	}

}

package com.example.AuthServer.repository;

import com.example.AuthServer.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthRepository extends JpaRepository<Auth, Long> {
    Auth findByEmailAndUpw(String email, String password);
    Auth findByEmail(String nickname);

}

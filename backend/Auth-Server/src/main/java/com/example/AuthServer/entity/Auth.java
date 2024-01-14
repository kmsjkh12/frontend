package com.example.AuthServer.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;


@Entity
@Table(name = "auth")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Auth {

    @Id
    @Column(nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(nullable = false)
    private String upw;

    @Column(nullable = false, length = 50)
    private String email;

}

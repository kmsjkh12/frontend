package com.example.AuthServer.dto;

import com.example.AuthServer.entity.Auth;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthDto {
    private Long uid;
    private String upw;
    private String email;


    public AuthDto(Auth auth) {
        this.uid=auth.getUid();
        this.upw=auth.getUpw();
        this.email= auth.getEmail();
    }
}

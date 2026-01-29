package com.hongochai.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private String fullname;
    private String username;
    private String password;
}
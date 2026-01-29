package com.hongochai.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hongochai.backend.dto.UserDto;
import com.hongochai.backend.entity.User;
import com.hongochai.backend.service.UserService;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, 
             allowedHeaders = "*",
             methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
             exposedHeaders = "Content-Range")
public class UserController {

    // @Autowired
    // private UserDetailsService userDetailsService;

    private UserService userService;

    // Create User REST API
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User User) {
        User savedUser = userService.createUser(User);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Get User by id REST API
    // http://localhost:8080/api/users/1
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long UserId) {
        User User = userService.getUserById(UserId);
        return new ResponseEntity<>(User, HttpStatus.OK);
    }

    // Get All Users REST API
    // http://localhost:8080/api/users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> Users = userService.getAllUsers();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Users.size() + "/" + Users.size());
        return ResponseEntity.ok().headers(headers).body(Users);
    }

    // Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/users/1
    public ResponseEntity<User> updateUser(@PathVariable("id") Long UserId,
            @RequestBody User User) {
        User.setId(UserId);
        User updatedUser = userService.updateUser(User);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long UserId) {
        userService.deleteUser(UserId);
        return new ResponseEntity<>("User successfully deleted", HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDto userDto) {
        User registeredUser = userService.registerUser(userDto);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDto userDto) {
        if (userService.loginUser(userDto)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }

}
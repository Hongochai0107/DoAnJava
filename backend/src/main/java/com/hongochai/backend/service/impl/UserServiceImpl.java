package com.hongochai.backend.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hongochai.backend.dto.UserDto;
import com.hongochai.backend.entity.User;
import com.hongochai.backend.repository.UserRepository;
import com.hongochai.backend.service.UserService;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    // @Autowired
    // PasswordEncoder passwordEncoder;

        @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setFullname(user.getFullname());
        existingUser.setToken(user.getToken());
        existingUser.setOrders(user.getOrders());

        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    @Override
    public User registerUser(UserDto userDto) {
        User newUser = new User(userDto.getFullname(), userDto.getUsername(), userDto.getPassword());
        return userRepository.save(newUser);
    }

    @Override
    public boolean loginUser(UserDto userDto) {
        User userInDb = userRepository.findByUsername(userDto.getUsername());
        return userInDb != null && userInDb.getPassword().equals(userDto.getPassword());
    }
 
}

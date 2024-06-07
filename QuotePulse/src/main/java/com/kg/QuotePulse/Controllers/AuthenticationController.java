package com.kg.QuotePulse.Controllers;

import com.kg.QuotePulse.DTO.AuthRequest;
import com.kg.QuotePulse.Entity.User;
import com.kg.QuotePulse.Service.AuthenticationServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {

    private final AuthenticationServices authenticationServices;

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody AuthRequest authRequest) {

        boolean isValidUser = authenticationServices.validateUser(authRequest);

        if (isValidUser) {

            return ResponseEntity.ok("Login successful");
        } else {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User newUser) {

        boolean isUserCreated = authenticationServices.CreateNewUser(newUser);

        if (isUserCreated) {

            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } else {

            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = authenticationServices.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
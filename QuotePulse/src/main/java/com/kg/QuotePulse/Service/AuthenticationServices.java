package com.kg.QuotePulse.Service;

import com.kg.QuotePulse.DTO.AuthRequest;
import com.kg.QuotePulse.Entity.User;
import com.kg.QuotePulse.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthenticationServices {

    private final UserRepository userRepository;

    public Boolean validateUser(AuthRequest request) {

        var userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            return false;  // User not found
        }

        var user = userOptional.get();
        String ref = user.getPassword();

        return request.getPassword().equals(ref);
    }

    public Boolean CreateNewUser(User new_user) {

        boolean userExist = userRepository.existsByEmail(new_user.getEmail());

        if(!userExist) {

            userRepository.save(new_user);
            return true;
        }
        else {

            return false;
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

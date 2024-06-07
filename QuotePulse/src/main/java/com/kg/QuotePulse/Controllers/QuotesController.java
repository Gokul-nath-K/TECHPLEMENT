package com.kg.QuotePulse.Controllers;

import com.kg.QuotePulse.Entity.Quotes;
import com.kg.QuotePulse.Service.QuotesServices;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/quotes")
public class QuotesController {

    final private QuotesServices quotesServices;

    @PostMapping("/saveAll")
    public void saveAllQuotes(@RequestBody List<Quotes> quotes) {

        quotesServices.saveQuotes(quotes);
    }

    @GetMapping("/getAll")
    public List<Quotes> getAll() {

        return quotesServices.getAll();
    }

    @GetMapping("/rand")
    public Optional<Quotes> getRandomQuotes() {

        return quotesServices.getRandomQuotes();
    }
}

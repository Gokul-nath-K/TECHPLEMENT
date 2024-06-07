package com.kg.QuotePulse.Service;

import com.kg.QuotePulse.Entity.Quotes;
import com.kg.QuotePulse.Repository.QuotesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class QuotesServices {

    final private QuotesRepository quotesRepository;

    public void saveQuotes(List<Quotes> quotes) {

        List<Quotes> qs = quotesRepository.findAll();

        if(qs.isEmpty()) {

            for(Quotes q : quotes) {

                quotesRepository.save(q);
            }
        }
    }

    public List<Quotes> getAll() {

        return quotesRepository.findAll();
    }
    public Optional<Quotes> getRandomQuotes() {

        Random rand = new Random();

        long rand_id = rand.nextLong(36);

        return quotesRepository.findById(rand_id);
    }
}

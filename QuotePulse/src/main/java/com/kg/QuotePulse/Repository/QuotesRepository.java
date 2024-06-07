package com.kg.QuotePulse.Repository;

import com.kg.QuotePulse.Entity.Quotes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuotesRepository extends JpaRepository<Quotes, Long> {

}

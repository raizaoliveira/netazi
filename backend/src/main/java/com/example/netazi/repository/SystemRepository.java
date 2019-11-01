package com.example.netazi.repository;


import com.example.netazi.domain.System;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SystemRepository extends CrudRepository<System, Long> {

    List<System> findByName(@Param("name") String name);


}

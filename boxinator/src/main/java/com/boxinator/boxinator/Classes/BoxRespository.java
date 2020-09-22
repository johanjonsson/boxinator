package com.boxinator.boxinator.Classes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface BoxRespository extends JpaRepository<Box, Integer> {


    @Query(value = "CALL GET_ALL_BOXES;", nativeQuery = true)
    List<Box> getAllBoxes();

    @Modifying
    @Transactional
    @Query(value = "CALL ADD_BOX(:in_name , :in_weight , :in_color , :in_country , :in_shipping_cost);", nativeQuery = true)
    void addBox(@Param("in_name") String in_name, @Param("in_weight") String in_weight, @Param("in_color") String in_color, @Param("in_country") String in_country, @Param("in_shipping_cost") double in_shipping_cost);


}

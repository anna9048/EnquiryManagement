package com.faith.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.faith.app.model.Enquiry;


public interface IEnquiryRepo extends JpaRepository<Enquiry, Integer>{

	@Query("from Enquiry where enquiryDate >=?1")
	List<Enquiry> findByDate(LocalDate enquiryDate);

}

package com.faith.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faith.app.model.Enquiry;
import com.faith.app.repository.ICourseRepo;
import com.faith.app.repository.IEnquiryRepo;

@Service
public class EnquiryService implements IEnquiryService{

	@Autowired
	private IEnquiryRepo enquiryRepo;
	
	@Transactional
	@Override
	public Enquiry addEnquiry(Enquiry enquiry) {
		// TODO Auto-generated method stub
		return enquiryRepo.save(enquiry);
	}

	@Override
	public List<Enquiry> viewEnquiry() {
		// TODO Auto-generated method stub
		return enquiryRepo.findAll();
	}

	@Override
	public List<Enquiry> listEnquiryByDate(LocalDate enquiryDate) {
		// TODO Auto-generated method stub
		return enquiryRepo.findByDate(enquiryDate);
	}

	@Transactional
	@Override
	public Enquiry updateEnquiry(Enquiry enquiry) {
		// TODO Auto-generated method stub
		return enquiryRepo.save(enquiry);
	}

	

}

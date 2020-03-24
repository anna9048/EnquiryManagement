package com.faith.app.service;

import java.time.LocalDate;
import java.util.List;

import com.faith.app.model.Enquiry;


public interface IEnquiryService {

	public Enquiry addEnquiry(Enquiry enquiry);
	public Enquiry updateEnquiry(Enquiry enquiry);
	public List<Enquiry> viewEnquiry();
	public List<Enquiry> listEnquiryByDate(LocalDate enquiryDate);
}

package com.faith.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faith.app.model.FollowupEnquiry;
import com.faith.app.repository.IFolloupEnquiry;

@Service
public class FollowupEnquiryService implements IFollowupEnquiryService{

	@Autowired
	private IFolloupEnquiry followupRepo;
	
	@Transactional
	@Override
	public FollowupEnquiry addFollowupEnquiry(FollowupEnquiry followupEnquiry) {
		// TODO Auto-generated method stub
		return followupRepo.save(followupEnquiry);
	}

	@Override
	public List<FollowupEnquiry> viewFollowup() {
		// TODO Auto-generated method stub
		return followupRepo.findAll();
	}

}

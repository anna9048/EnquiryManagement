package com.faith.app.service;

import java.util.List;

import com.faith.app.model.FollowupEnquiry;

public interface IFollowupEnquiryService {

	public FollowupEnquiry addFollowupEnquiry(FollowupEnquiry followupEnquiry);

	public List<FollowupEnquiry> viewFollowup();
	
}

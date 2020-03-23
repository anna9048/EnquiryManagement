package com.faith.app.model;

import java.time.LocalDate;
import java.util.regex.Pattern;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class FollowupEnquiry {

	// instance variables
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer FollowupId;

	private Integer EnquiryId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate FollowupDate=LocalDate.now();

	private Integer CoordinatorId;
	private String Comments;

	// default constructor
	public FollowupEnquiry() {
		// TODO Auto-generated constructor stub
	}

	// getters and setters
	public Integer getFollowupId() {
		return FollowupId;
	}

	public void setFollowupId(Integer followupId) {
		FollowupId = followupId;
	}

	public Integer getEnquiryId() {
		return EnquiryId;
	}

	public void setEnquiryId(Integer enquiryId) {
		EnquiryId = enquiryId;
	}

	public LocalDate getFollowupDate() {
		return FollowupDate;
	}

	public void setFollowupDate(LocalDate followupDate) {
		FollowupDate = followupDate;
	}

	public Integer getCoordinatorId() {
		return CoordinatorId;
	}

	public void setCoordinatorId(Integer coordinatorId) {
		CoordinatorId = coordinatorId;
	}

	public String getComments() {
		return Comments;
	}

	public void setComments(String comments) {
		Comments = comments;
	}

	// tostring method
	@Override
	public String toString() {
		return "FolloupEnquiry [FollowupId=" + FollowupId + ", EnquiryId=" + EnquiryId + ", FollowupDate="
				+ FollowupDate + ", CoordinatorId=" + CoordinatorId + ", Comments=" + Comments + "]";
	}

}

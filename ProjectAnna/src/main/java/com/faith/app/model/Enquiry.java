package com.faith.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Enquiry {

	// instance variables
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer enquiryId;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate enquiryDate=LocalDate.now();

	private String name;
	private String email;

	private String phone;

	private Integer courseId;
	private String leadSource;
	private Integer qualificationId;
	private String query, status;

	//default constructor
	public Enquiry() {
		// TODO Auto-generated constructor stub
	}

	//setters and getters
	public Integer getEnquiryId() {
		return enquiryId;
	}

	public void setEnquiryId(Integer enquiryId) {
		this.enquiryId = enquiryId;
	}

	public LocalDate getEnquiryDate() {
		return enquiryDate;
	}

	public void setEnquiryDate(LocalDate enquiryDate) {
		this.enquiryDate = enquiryDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getLeadSource() {
		return leadSource;
	}

	public void setLeadSource(String leadSource) {
		this.leadSource = leadSource;
	}

	public Integer getQualificationId() {
		return qualificationId;
	}

	public void setQualificationId(Integer qualificationId) {
		this.qualificationId = qualificationId;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	//tostring method
	@Override
	public String toString() {
		return "Enquiry [enquiryId=" + enquiryId + ", enquiryDate=" + enquiryDate + ", name=" + name + ", email="
				+ email + ", phone=" + phone + ", courseId=" + courseId + ", leadSource=" + leadSource
				+ ", qualificationId=" + qualificationId + ", query=" + query + ", status=" + status + "]";
	}

}

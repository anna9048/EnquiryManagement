package com.faith.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faith.app.model.Course;
import com.faith.app.model.Enquiry;
import com.faith.app.model.FollowupEnquiry;
import com.faith.app.service.ICourseService;
import com.faith.app.service.IEnquiryService;
import com.faith.app.service.IFollowupEnquiryService;

@CrossOrigin
@RestController
@RequestMapping("/")

public class EnquiryController {
	@Autowired
	private IFollowupEnquiryService followupServ;

	@Autowired
	private ICourseService courseServ;
	
	@Autowired
	private IEnquiryService enquiryServ;
	
	// add followup enquiry details
	@PostMapping("followupenquiry")
	public ResponseEntity<FollowupEnquiry> addFollowup(@RequestBody FollowupEnquiry followupEnquiry) {

		return new ResponseEntity<FollowupEnquiry>(followupServ.addFollowupEnquiry(followupEnquiry), HttpStatus.OK);
	}

	// list all followup enquiries
	@GetMapping("followupenquiries")
	public ResponseEntity<List<FollowupEnquiry>> getAllFollowUp() {
		return new ResponseEntity<List<FollowupEnquiry>>(followupServ.viewFollowup(), HttpStatus.OK);
	}

	// list all courses
	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getAllCourses() {
		return new ResponseEntity<List<Course>>(courseServ.viewCourse(), HttpStatus.OK);
	}

	// add enquiry details
	@PostMapping("enquiry")
	public ResponseEntity<Enquiry> addEnquiry(@RequestBody Enquiry enquiry) {

		return new ResponseEntity<Enquiry>(enquiryServ.addEnquiry(enquiry), HttpStatus.OK);
	}

	// list all enquiries
	@GetMapping("enquiries")
	public ResponseEntity<List<Enquiry>> getAllEnquiries() {
		return new ResponseEntity<List<Enquiry>>(enquiryServ.viewEnquiry(), HttpStatus.OK);
	}
	
	// list all enquiries by date
		@GetMapping("enquiries/{enquiryDate}")
		public ResponseEntity<List<Enquiry>> getAllEnquiriesbyDate(@PathVariable("enquiryDate") LocalDate enquiryDate) {
			return new ResponseEntity<List<Enquiry>>(enquiryServ.listEnquiry(enquiryDate), HttpStatus.OK);
		}
		
		// update enquiry details
		@PutMapping("enquiry/{id}")
		public ResponseEntity<Enquiry> updateEnquiry(@RequestBody Enquiry enquiry) {

			return new ResponseEntity<Enquiry>(enquiryServ.updateEnquiry(enquiry), HttpStatus.OK);
		}
}

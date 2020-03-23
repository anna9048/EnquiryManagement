package com.faith.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faith.app.model.Course;
import com.faith.app.repository.ICourseRepo;

@Service
public class CourseService implements ICourseService{

	@Autowired
	private ICourseRepo courseRepo;
	
	@Transactional
	@Override
	public List<Course> viewCourse() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}

	
}

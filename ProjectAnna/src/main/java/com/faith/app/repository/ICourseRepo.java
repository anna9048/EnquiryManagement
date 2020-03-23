package com.faith.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faith.app.model.Course;

public interface ICourseRepo extends JpaRepository<Course, Integer>{


}

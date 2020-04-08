import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { Enquiry } from '../enquiry';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnquiryService } from '../enquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addenquiry',
  templateUrl: './addenquiry.component.html',
  styleUrls: ['./addenquiry.component.scss']
})
export class AddenquiryComponent implements OnInit {

  enquiry: Enquiry = new Enquiry();
  submitted = false;
  addenquiryForm: FormGroup;
  courses: Observable<Course[]>

  constructor(private courseService: CourseService,
    private fb: FormBuilder,
    private enquiryService: EnquiryService,
    private router: Router) {

  }


  ngOnInit() {
    this.createForm();
    this.getCourseName();

  }

  createForm() {
    this.addenquiryForm = this.fb.group({
      courseId: ['', Validators.required],
      email: ['', Validators.required],
      leadSource: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      qualificationId: ['', Validators.required],
      query: ['', Validators.required]
  


    });
  }

  courseName: String[];
  getCourseName(): void {
    this.courseService.getCourseList()
      .subscribe((response) => {

        this.courseName = response as String[];
        console.log(this.courseName);
      }, (error) => {
        console.log(error);
      })
  }

  
  onSubmit() {
    this.submitted = true;
    this.enquiry = new Enquiry();
    this.enquiry.courseId=this.addenquiryForm.controls.courseId.value;
    this.enquiry.email=this.addenquiryForm.controls.email.value;
    this.enquiry.leadSource=this.addenquiryForm.controls.leadSource.value;
    this.enquiry.name=this.addenquiryForm.controls.name.value;
    this.enquiry.phone=this.addenquiryForm.controls.phone.value;
    this.enquiry.qualificationId=this.addenquiryForm.controls.qualificationId.value;
    this.enquiry.query=this.addenquiryForm.controls.query.value;
    this.save();
 

  }


 save(){
  console.log(this.enquiry);
   this.enquiryService.createEnquiry(this.enquiry)
   .subscribe(data => console.log(data), error => console.log(error));
    
 }
}

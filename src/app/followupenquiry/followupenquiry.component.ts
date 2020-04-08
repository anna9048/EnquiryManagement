import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../enquiry.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Followupenquiry } from '../followupenquiry';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-followupenquiry',
  templateUrl: './followupenquiry.component.html',
  styleUrls: ['./followupenquiry.component.scss']
})
export class FollowupenquiryComponent implements OnInit {

  folowupenquiry: Followupenquiry = new Followupenquiry();
  submitted = false;
  addfollowupenquiryForm: FormGroup;
  enqId: number;
  enquiry: Enquiry = new Enquiry();

  constructor(private fb: FormBuilder,
    private enquiryService: EnquiryService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.enqId = this.route.snapshot.params['enquiryId'];
    console.log(this.enqId);
    this.createForm();
    this.enquiryService.getEnquiry(this.enqId) .subscribe(data =>{
      console.log(data)
      this.enquiry= data;
    },error=>console.log(error));

    console.log(this.enquiry);
  }


  createForm() {

    this.addfollowupenquiryForm = this.fb.group({
      status: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  onSubmitUpdate(){

    this.submitted = true;
    //this.enquiry = new Enquiry();
    this.folowupenquiry=new Followupenquiry();
    this.folowupenquiry.enquiryId=this.enqId;
    this.folowupenquiry.comments=this.addfollowupenquiryForm.controls.comments.value;
    this.enquiry.status=this.addfollowupenquiryForm.controls.status.value;
 
    this.save();

  }

  save(){
    console.log(this.enquiry);
     this.enquiryService.createFollowupEnquiry(this.folowupenquiry)
     .subscribe(data => console.log(data), error => console.log(error));
     
      this.updateEnquiry();
      console.log("success");
   }


   updateEnquiry(){
    
    this.enquiryService.updateEnquiry(this.enqId,this.enquiry)
    .subscribe(data=>console.log(data),error=>console.log(error));
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.scss']
 
})
export class ViewenquiryComponent implements OnInit {

 p:number=1;

  enquiryDate: Date;
  enquiries: Observable<Enquiry[]>

  constructor(private route: ActivatedRoute,
    private router: Router,
    private enquiryService: EnquiryService) { }

  ngOnInit() {
  }


  onSearch() {
    this.enquiries = this.enquiryService.getEnquiryList(this.enquiryDate);
  }

  followupenquiry(enquiryId:number){
    this.router.navigate(['coordinator/followupenquiry',enquiryId]);

  }


 
}

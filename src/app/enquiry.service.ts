import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Enquiry } from './enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  
 
  constructor(private httpService: HttpClient) { }

  createEnquiry(enquiry:Object):Observable<any>{
    return this.httpService.post(environment.apiUrl+'/enquiry',enquiry);
  }
  
  
  getEnquiryList(enquiry_date: Date):Observable<any>{
    return this.httpService.get(environment.apiUrl+'/enquiries/'+enquiry_date);
  }


  getEnquiry(enqId: number):Observable<any> {
    return this.httpService.get(environment.apiUrl+'/enquiry/'+enqId);
  }

  createFollowupEnquiry(folowupenquiry: Object):Observable<any> {
    return this.httpService.post(environment.apiUrl+'/followupenquiry',folowupenquiry);
  }


  updateEnquiry(enqId: number, enquiry:Enquiry):Observable<any> {
    return this.httpService.put(environment.apiUrl+'/enquiry/'+enqId,enquiry);
  }

  
}

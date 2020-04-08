import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpService: HttpClient) { }

  //For Drop Down 
  getCourseList(): Observable<any> {
    return this.httpService.get(environment.apiUrl + 'courses');
  }



}

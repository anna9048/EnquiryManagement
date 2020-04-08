import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private httpService: HttpClient,
    private router: Router) { }

  public loginVerify(username:string,password:string):Observable<any> {
    // calling webservice url and passing username and password
    return this.httpService.get(environment.apiUrl + "/login/"+username+'&'+password);
  }

 public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('UserID');
  }


  public isLoggedIn() {
    if (sessionStorage.getItem('ACCESS_TOKEN') == null) {
      this.router.navigateByUrl('/login');
    }
    else {
      return localStorage.getItem('ACCESS_ADMIN') !== null;
    }
  }
 
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loginUser:Login=new Login();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]]

    });
  }

  
  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    

    this.isSubmitted = true;
   

    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {
      alert('User form is valid!!')

      this.loginUser = new Login();
      this.loginUser.username=this.loginForm.controls.username.value;
      this.loginUser.password=this.loginForm.controls.password.value;
      this.authService.loginVerify(this.loginUser.username,this.loginUser.password)
        .subscribe(data => {
        this.loginUser= data;
          console.log(data.username);
         console.log(data.roleId);

          if (data.username != null) {
            this.isSubmitted = true;
            localStorage.setItem('ACCESS_TOKEN', "access_token");
            localStorage.setItem('UserID', data.username);
          if (data.roleId === 1)
           this.router.navigateByUrl('/coordinator');
          }
          else {
            window.alert("Wrong username or password");
          }
        }, (error) => {
          console.log(error);
          window.alert("Wrong username or password");
        }
        );
    }
    else {
      alert('User form is not valid!!')
      return;
    }
  }//end login

}

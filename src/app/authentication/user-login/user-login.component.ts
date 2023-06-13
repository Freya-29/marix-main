import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;
  data = [
    {
      username : "vihang",
      password : "India@123",
      role : "Admin"
    },
    {
      username: "neel",
      password : "India@123",
      role : "user"
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  get f(){ return this.form.controls; }


  onSubmit(){
    this.submitted = true;
    this.authService.login(this.f['username'].value, this.f['password'].value);
    this.form.reset();
    
    // this.alertService.clear()

    // if (this.form.invalid){
    //   return;
    // }

    // this.loading = true;
 
    // let returnValue = this.checkUser(this.f['username'].value,this.f['password'].value)
    // if (returnValue === 'Admin'){
    //   console.log('admin')
    // }
    // if (returnValue === 'user'){
    //   console.log('user')
    // }

    // this.router.navigate(['./dashboard']);
    // this.authService.login(this.f['username'].value, this.f['password'].value)


  }

  // checkUser(username:string , password:string){
  //   let returnValue = ''
  //   this.data.map(ele=>{
  //     if(ele.username === username && ele.password  === password){
  //       returnValue = ele.role
  //     }
  //   })
  //   return returnValue
  // }

}

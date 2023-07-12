import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private auth: AuthService,private router:Router){}

  signupForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })
   
  signup(){
  
 const name = this.signupForm.get('name')?.value
  const email = this.signupForm.get('email')?.value
 const  password = this.signupForm.get('password')?.value
 if(name && name.length > 0 && email && email.length>0 && password && password.length>0){
  this.auth.signup(name,email,password)
  this.signupForm.patchValue({
  name : '',
  email : '',
  password:''
 })
 }
 else{
  alert('Please Enter Details Properly')
 }
   
  }

  login(){
    this.router.navigate(['/login'])
  }
}

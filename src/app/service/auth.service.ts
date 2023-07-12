import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  loginDetails=[{
    "name":'',
    "email":'',
    "password":''
  }]
  signup(name:any,email:any,password:any){
    this.loginDetails.push({name,email,password})
    alert('Signin Successful')
    // console.log(this.loginDetails)
  }
  login(uname:any,password:any){
   let loginame = this.loginDetails.map((e)=>{return e.name})
   let loginpwd = this.loginDetails.map((e)=>{return e.password})
   if(loginame.includes(uname) && loginpwd.includes(password))
   {
    this.router.navigate(['home'])
  }
  else{
    alert('Please signin');
    this.router.navigate(['/signup'])
  }
}
}
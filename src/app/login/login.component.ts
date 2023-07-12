import { Component } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private auth:AuthService){}

  regForm = new FormGroup({
      uname: new FormControl("",[Validators.required,Validators.minLength(5)]),
      pwd : new FormControl("",Validators.required)
  })

  login(){
    const uname = this.regForm.get('uname')?.value
    const pwd = this.regForm.get('pwd')?.value
    if(uname && uname.length>0 && pwd && pwd.length>0){
      this.auth.login(uname,pwd);
    }
    else{
      alert('Please Enter Login details')
    }
   
  }
}

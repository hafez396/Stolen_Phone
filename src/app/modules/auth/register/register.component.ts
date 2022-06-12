import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.RegisterForm = new FormGroup({
      username:  new FormControl('',Validators.required ),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required )
    })
      
 

  }

  submit(form:FormGroup) {
 
    let body= {
      username: form.value.username,
      email:  form.value.email,
      password: form.value.password
    }

    console.log(body)
    this.auth.signIn(body).subscribe(res => {

 
    },(err) => {
      console.log(err)
  
    })

  }

}

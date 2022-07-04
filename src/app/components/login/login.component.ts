import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | '' = '';
  password: string | '' = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.email || !this.password)
      alert("enter email and password");
    else {
      console.log("submitted")
    }
  }

  loginWithGoogle(): void {
    const data: object = {
      email: this.email,
      password: this.password
    }
    console.log(data)
  }

}

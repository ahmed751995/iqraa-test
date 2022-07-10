import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | '' = '';
  password: string | '' = '';
  
  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    const value = {
      'email': event.target.email.value,
      'password': event.target.password.value
    }
    this.auth.SignIn(value)
      .then((resp) =>  {
	console.log("resp", resp.user)
	this.router.navigate(['/'])
      })
      .catch((error) => {
	this.router.navigate(['/login']);
	alert(error)
      })
    // console.log(value)
    // this.auth.SignIn(value)
    //   .then(res => {
    // 	console.log(res.user)
    //   })
    //   .catch(err => alert(err))
    // if(!this.email || !this.password)
    //   alert("enter email and password");
    // else {
    //   console.log("submitted")
    // }
  }

  loginWithGoogle(): void {
    // const data: object = {
    //   email: this.email,
    //   password: this.password
    // }
    // console.log(data)
    this.auth.SignInWithGoogle()
      .then(resp =>  {
	console.log(resp);
	this.router.navigate(['/'])
      })
      .catch(err=> console.log(err))
  }

}

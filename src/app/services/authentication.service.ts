import { Injectable } from '@angular/core';
import { Auth,
	 signInWithEmailAndPassword,
	 createUserWithEmailAndPassword,
	 GoogleAuthProvider,
	 signInWithRedirect,
	 getRedirectResult,
	 signInWithPopup
       }from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  provider: any = new GoogleAuthProvider();
  
  constructor(public auth: Auth) {}

  SignUp(value: any) {
    return createUserWithEmailAndPassword(this.auth, value.email, value.password);
  }
  SignIn(value: any) {
    return signInWithEmailAndPassword(this.auth, value.email, value.password);
    // return signInWithPopup(this.auth, this.provider);
  }

  SignInWithGoogle() {
    return signInWithPopup(this.auth, this.provider)
  }

  isLoggedIn() {
    return !!localStorage.getItem('user')
  }
}

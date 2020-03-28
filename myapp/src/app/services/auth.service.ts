import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';


import 'rxjs/add/operator/toPromise'

@Injectable()
export class AuthService {
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.cookieservice.get('csrftoken')
      })

  constructor(private http: HttpClient, private cookieservice: CookieService ){}

	login(user: User) {
		let url: string = '/api-login-user/';
		console.log(document.cookie['csrftoken']);
		return this.http.post<any>(`http://127.0.0.1:8000/api/auth/token/login/`,user)
	}

	register(user: User) {
    return this.http.post(`http://127.0.0.1:8000/api/auth/users/`, user);
}


}


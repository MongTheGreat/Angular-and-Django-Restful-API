import { Injectable } from '@angular/core';

/** client-side authentication/authorization service */
@Injectable()
export class AuthService {



  getAuthorizationToken() {
    return 'some-auth-token';
  }
}

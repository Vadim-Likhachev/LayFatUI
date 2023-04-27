import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = ''

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(environment.host + 'api/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        })
      )
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.host + 'api/auth/register', user)
  }

  setToken(token: string): void {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout(): void {
    this.setToken('')
    localStorage.clear()
  }
}

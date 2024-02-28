import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = ""

  constructor(private _http: HttpClient) { }

  enroll(user: User) {

  }
}

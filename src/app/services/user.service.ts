import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserModel} from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    loginUser(username: string, password: string): Observable<UserModel> {
        return this.http
            .post(environment.url + 'users/v1/users/login', {userName: username, userPassword: password})
            .pipe(map( (rsp: any) => new UserModel(rsp.data)));
    }
}

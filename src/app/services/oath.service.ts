import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UserModel} from '../models/UserModel';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OathService {
    private userData: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);
    constructor(private http: HttpClient) { }

    setUserLocalStorageData(user: UserModel) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    deleteUserLocalStorageData() {
        localStorage.clear();
    }

    getUserAccessToken(): UserModel {
        return  JSON.parse(localStorage.getItem('user'));
    }

    setUserData(userData: UserModel) {
        this.userData.next(userData);
    }
    receiveUserData(): Observable<UserModel> {
        return this.userData.asObservable();
    }

    authorizeUsersOnChannel(authToken: string, channelId: number): Observable<string> {
        return this.http.get(environment.url + 'auth/v1/auth', {
            headers: {
                Authorization: authToken,
                channelID: channelId.toString()
            },
            responseType: 'text'
        });
    }
}

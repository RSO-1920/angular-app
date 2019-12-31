import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OathService {
    private userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor() { }

    setUserLocalStorageData(userToken: string) {
      localStorage.setItem('accessToken', userToken);
    }

    deleteUserLocalStorageData() {
        localStorage.clear();
    }

    getUserAccessToken(): string {
        return localStorage.getItem('accessToken');
    }

    setUserData(userData: any) {
        this.userData.next(userData);
    }
    receiveUserData(): Observable<any> {
        return this.userData.asObservable();
    }
}

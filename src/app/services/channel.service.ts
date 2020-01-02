import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Channel} from '../models/channel';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

    constructor(private http: HttpClient)  {

    }


    getChannels(id: number): Observable<any> {
        // const url = environment.url.concat('channels/v1/channels/userChannels/2');
        return this.http
            .get(environment.url + 'channels/v1/channels/userChannels/2');
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

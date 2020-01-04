import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Channel} from '../models/channel';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {NewChannelModel} from '../models/NewChannelModel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

    constructor(private http: HttpClient)  {

    }

    // MANAGE CHANNELS
    getChannels(id: string): Observable<any> {
        return this.http
            .get(environment.url + 'channels/v1/channels/userChannels/' + id);
    }

    getAllChannels(): Observable<any> {
        return this.http
            .get(environment.url + 'channels/v1/channels/');
    }

    addUserOnChannel(userId: string, channelId): Observable<any> {
        return this.http
            .post(environment.url + 'channels/v1/channels/addUserOnChannel', {userId, channelId});
    }

    deleteUserOnChannel(userId: string, channelId: number): Observable<any> {
        return this.http
            .delete(environment.url + 'channels/v1/channels/remove/user/' + userId + '/channel/' + channelId);
    }

    deleteChannel(channelId: number, deleteDefault = false): Observable<any> {
        return this.http
            .delete(environment.url + 'channels/v1/channels/' + channelId + '/channel?deleteDefault=' + deleteDefault);
    }

    createChannel(chanelData: NewChannelModel): Observable<any> {
        return this.http
            .post(environment.url + 'channels/v1/channels/createChannel', chanelData);
    }

    getFilesOfChannel(id: number): Observable<any> {
        return this.http.get(environment.url + 'catalog/v1/catalog/channel/' + id);
    }
    searchFilesOfChannel(searchString: string): Observable<any> {
        return this.http.get(environment.url + 'catalog/v1/catalog/keywords?key=' + searchString);
    }
    getMessagesOfChannel(id: number): Observable<any> {
        // TODO: This
        return this.http.get(environment.url + 'incomingmsg/v1/msg/' + id);
    }
    // MANAGE FILES

    /*  HANDLED IN PRIMITIWE WAY WITH WINDOWS REDIRECTS
    downloadFile(fileName: string, channelName: string) {
        //
        return this.http.get(environment.url + 'v1/fileTransfer/' +
            channelName + '/' + fileName);
    }

    openFile(fileName: string, channelName: string) {
        return this.http.get(environment.url + 'filedownloader/v1/file/showInBrowser/' + channelName + '/' + fileName );
    }*/

    deleteFile(fileId: number, channelId: number) {
        return this.http.delete(environment.url +
            'file-manager/v1/file/delete/?fileId=' + fileId +
            '&channelId=' + channelId);
    }
    uploadFile(fileToUpload: File, userId: string, channelId: number) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('integerUser', userId);
        formData.append('integerChannel', channelId.toString());
        console.log('uploading file');
        return this.http
            .post(environment.url + 'file-manager/v1/file/upload', formData);
    }

    postMessage(msg: string, uName: string, chId: number): Observable<any> {
        return this.http.post(environment.url + 'incomingmsg/v1/msg/' + chId, {message: msg, userName: uName, channelId: chId});
    }
}

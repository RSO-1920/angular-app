import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';
import {Channel} from '../../models/channel';
import {ChannelService} from '../../services/channel.service';
import {Message} from '../../models/message';
import {UserModel} from '../../models/UserModel';

import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {

    userDataLanding: UserModel;
    currentChannel: Channel;
    channels: Array<Channel>;
    channelFiles: Array<File>;
    channelMessages: Array<Message>;
    searchString = '';
    myWebSocket: WebSocketSubject<any> = null;

    constructor(
      private oathService: OathService,
      private changeDetector: ChangeDetectorRef,
      private  router: Router,
      private channelService: ChannelService
    ) {
    }

    ngOnInit() {
        this.oathService.receiveUserData().subscribe(
            (data: UserModel) => {
                this.userDataLanding = data;
                if (!this.userDataLanding) {
                    this.userDataLanding = this.oathService.getUserAccessToken();
                }
                console.log('RECEIVED USER DATA: ', this.userDataLanding);
                this.getChannelsOfUser();
                this.changeDetector.markForCheck();
            }
        );
    }

    subscribeToWebsocket(channelId: number) {
        if (this.myWebSocket) {
            this.myWebSocket.unsubscribe();
        }

        this.myWebSocket = webSocket( environment.websocket + 'msg/' + channelId);
        this.myWebSocket.subscribe(
            (msg: Message) => {
                console.log('RECEIVED MESSAGE: ', msg);
                this.channelMessages.push(msg);
                this.changeDetector.markForCheck();
            },
            err => console.log(err),
            () => {
                console.log('complete');
                this.subscribeToWebsocket(this.currentChannel.channelId);
            }
        );
    }

    logOut() {
        this.oathService.deleteUserLocalStorageData();
        this.router.navigate(['']);
    }

    String(): string {
        if (!this.userDataLanding) {
            return 'NO USER';
        }
        return this.userDataLanding.username;
    }

    private getChannelsOfUser() {
        return this.channelService.getChannels(this.userDataLanding.id).subscribe(
            (success) => {
                this.channels = success.data;
                this.currentChannel = this.channels[0];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.channels.length; i++) {
                    if (this.channels[i].channelType.typeId === 1) {
                        this.currentChannel = this.channels[i];
                        break;
                    }
                }
                this.oathService.authorizeUsersOnChannel(this.userDataLanding.authToken, this.currentChannel.channelId).subscribe(
                    (rsp: string) => {
                        console.log('AUTH RESPONSE: ', rsp);
                        if (rsp !== 'True') {
                            this.logOut();
                            return;
                        }
                        this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
                            // tslint:disable-next-line:no-shadowed-variable
                            (success1) => {
                                this.channelFiles = success1.data;
                                this.channelService.getMessagesOfChannel(this.currentChannel.channelId).subscribe(
                                    (messagesRsp: any) => {
                                        this.channelMessages =  messagesRsp.data;
                                        this.subscribeToWebsocket(this.currentChannel.channelId);
                                        this.changeDetector.markForCheck();
                                    },
                                    error => {
                                        console.log('error: ', error);
                                    }
                                );
                            },
                            (error) => {
                                console.log(error);
                            }
                        );
                    },
                    error => console.log(error)
                );
            },
            (error) => {
                console.log(error);
            }
        );
    }

    changeChannel(channelId: any) {
        this.channelService.getFilesOfChannel(channelId).subscribe(
            (success) => {
                this.channelFiles = success.data;
                this.channelService.getMessagesOfChannel(channelId).subscribe(
                    (success1) => {
                        this.channelMessages =  success1.data;
                        // tslint:disable-next-line:prefer-for-of
                        for (let i = 0; i < this.channels.length; i++) {
                            if (this.channels[i].channelId === channelId) {
                                this.currentChannel = this.channels[i];
                                break;
                            }
                        }
                        this.subscribeToWebsocket(this.currentChannel.channelId);
                        this.changeDetector.markForCheck();
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
                (error) => {
                    console.log(error);
                }
        );
    }


    deleteFile(fileId: number, channelId: number) {
        this.channelService.deleteFile(fileId, channelId);
    }
    uploadFile(files: FileList) {
        let fileToUpload: File = null;
        fileToUpload = files.item(0);
        console.log(fileToUpload);
        this.channelService.uploadFile(fileToUpload, this.userDataLanding.id, this.currentChannel.channelId).subscribe(
            (rsp: any) => {
                console.log('FILE UPLOAD: ', rsp);
                this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    (success1) => {
                        this.channelFiles = success1.data;
                        this.changeDetector.markForCheck();
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            error => console.log(error)
        );
    }

    postMessage(value: string) {
        console.log('SENDING MESSAGE ' + value);
        console.log('channel: ' + this.currentChannel.channelId);
        // TODO: NASTAVI USERJA
        if (value !== '') {
            this.channelService.postMessage(value, this.userDataLanding.username, this.currentChannel.channelId).subscribe(
                (rsp: any) => {
                    console.log('RSP: ', rsp);
                },
                error => {
                    console.log(error);
                }
            );
        }
    }

    searchFiles() {
        console.log('SEARCH: ', this.searchString);
        this.channelService.searchFilesOfChannel(this.searchString).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (success1) => {
                this.channelFiles = success1.data;
                this.changeDetector.markForCheck();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    unsubsscirbe() {
        this.channelService.deleteUserOnChannel(this.userDataLanding.id, this.currentChannel.channelId).subscribe(
            (rsp: any) => {
                console.log('USER FROM CHANNEL DELETION: ', rsp);
                this.getChannelsOfUser();
            },
            error => console.log(error)
        );
        console.log('unsubscibe');
    }

    deleteChannel() {
        this.channelService.deleteChannel(this.currentChannel.channelId)
            .subscribe(
                (rsp: any) => {
                    console.log('deleting channel', rsp);
                    this.getChannelsOfUser();
                },
                error => console.log(error)
            );
    }

    fileDeletionSuccess(isDeleted: boolean) {
        console.log('IS DELETED: ', isDeleted);
        if (isDeleted) {
            this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                (success1) => {
                    this.channelFiles = success1.data;
                    this.changeDetector.markForCheck();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}

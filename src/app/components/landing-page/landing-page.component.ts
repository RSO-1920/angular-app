import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';
import {Channel} from '../../models/channel';
import {ChannelService} from '../../services/channel.service';
import {Message} from '../../models/message';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {

    userDataLanding: any;
    currentChannel: Channel;
    channels: Array<Channel>;
    channelFiles: Array<File>;
    channelMessages: Array<Message>;

    constructor(
      private oathService: OathService,
      private changeDetector: ChangeDetectorRef,
      private  router: Router,
      private channelService: ChannelService
    ) {
    }

    ngOnInit() {
        this.oathService.receiveUserData().subscribe(
            (data: string) => {
                this.userDataLanding = data;
                // TODO  IF NULL GET USER ID FROM LOCALSTORAGE AND CALL SERVICE FOR GETTING USER DETAILED DATA
                this.changeDetector.markForCheck();
            }
        );
        this.getChannelsOfUser();
    }

    logOut() {
        this.oathService.deleteUserLocalStorageData();
        this.router.navigate(['']);
    }

    String(): string {
        if (!this.userDataLanding) {
            return 'NO USER';
        }
        return this.userDataLanding.toString();
    }

    private getChannelsOfUser() {
        return this.channelService.getChannels(1).subscribe(
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
                this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    (success1) => {
                        this.channelFiles = success1.data;
                        this.channelService.getMessagesOfChannel(this.currentChannel.channelId).subscribe(
                            (messagesRsp: any) => {
                                this.channelMessages =  messagesRsp.data;
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
        // TODO: kaj se pošlje?
        let fileToUpload: File = null;
        fileToUpload = files.item(0);
        console.log(fileToUpload);
        this.channelService.uploadFile(fileToUpload, 1, this.currentChannel.channelId).subscribe(
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
        )
    }

    postMessage(value: string) {
        console.log('SENDING MESSAGE ' + value);
        console.log('channel: ' + this.currentChannel.channelId);
        // TODO: NASTAVI USERJA
        if (value !== '') {
            this.channelService.postMessage(value, 'uros', this.currentChannel.channelId).subscribe(
                (rsp: any) => {
                    console.log('RSP: ', rsp);
                },
                error => {
                    console.log(error);
                }
            );
        }
    }
}

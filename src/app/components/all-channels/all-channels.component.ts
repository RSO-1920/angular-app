import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';
import {ChannelService} from '../../services/channel.service';
import {Channel} from '../../models/channel';
import {NewChannelModel} from '../../models/NewChannelModel';

@Component({
    selector: 'app-all-channels',
    templateUrl: './all-channels.component.html',
    styleUrls: ['./all-channels.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllChannelsComponent implements OnInit {
    userDataLanding: UserModel;
    allChannels: Array<Channel>;
    newChannel: NewChannelModel;
    constructor(
        private oathService: OathService,
        private changeDetector: ChangeDetectorRef,
        private  router: Router,
        private channelService: ChannelService
    ) { }

    ngOnInit() {
        this.oathService.receiveUserData().subscribe(
            (data: UserModel) => {
                this.userDataLanding = data;
                if (!this.userDataLanding) {
                    this.userDataLanding = this.oathService.getUserAccessToken();
                }
                console.log('RECEIVED USER DATA: ', this.userDataLanding);
                this.getAllChannels();
                this.newChannel = new NewChannelModel({
                    adminId: this.userDataLanding.id,
                    channelName: '',
                    channelType: 2
                });
                this.changeDetector.markForCheck();
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

    getAllChannels(): void {
        this.channelService.getAllChannels().subscribe(
            (rsp: any) => {
                console.log(rsp);
                this.allChannels = rsp.data;
                this.changeDetector.markForCheck();
            },
            error => console.log(error)
        );
    }

    subscribeOnChannel(channelId: number) {
        this.channelService.addUserOnChannel(this.userDataLanding.id, channelId).subscribe(
            (rsp: any) => {
                console.log('SUBSCRIBE: ', rsp);
            },
            error => console.log(error)
        );
    }

    resetCreate() {
        this.newChannel = new NewChannelModel({
            adminId: this.userDataLanding.id,
            channelName: '',
            channelType: 2
        });
        this.changeDetector.markForCheck();
    }

    createChannel() {
        console.log('channel creation: ', this.newChannel);
        this.channelService
            .createChannel(this.newChannel)
            .subscribe(
                (rsp: any) => {
                    console.log('CHANNEL CREATION: ', rsp);
                    this.getAllChannels();
                    this.newChannel = new NewChannelModel({
                        adminId: this.userDataLanding.id,
                        channelName: '',
                        channelType: 2
                    });
                    this.changeDetector.markForCheck();
                },
                error => console.log(error)
            );
    }
}

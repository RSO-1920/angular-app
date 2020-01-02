import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';
import {Channel} from '../../models/channel';
import {ChannelService} from '../../services/channel.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {

    userDataLanding: any;

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
        return this.channelService.getChannels(2).subscribe(
            (success) => {
                console.log(success);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';

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
      private  router: Router
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
}

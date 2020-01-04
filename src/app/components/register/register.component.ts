import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChannelService} from '../../services/channel.service';
import {UserService} from '../../services/user.service';
import {UserRegistrationModel} from '../../models/UserRegistrationModel';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
    userRegistration: UserRegistrationModel;
    constructor(
      private  router: Router,
      private channelService: ChannelService,
      private userService: UserService
    ) { }

    ngOnInit() {
        this.userRegistration = new UserRegistrationModel({
            userName: '',
            userFirstName: '',
            userLastName: '',
            userMail: '',
            userPassword: ''
        });
    }

    register(): void {
        console.log('REGISTER: ', this.userRegistration);
        this.userService.registerUser(this.userRegistration).subscribe(
            (rsp: any) => {
                console.log(rsp);
                this.userRegistration = new UserRegistrationModel({
                    userName: '',
                    userFirstName: '',
                    userLastName: '',
                    userMail: '',
                    userPassword: ''
                });
            },
            error => console.log(error)
        );
    }

}

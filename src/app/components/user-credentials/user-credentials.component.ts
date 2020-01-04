import { Component, OnInit } from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.scss']
})
export class UserCredentialsComponent implements OnInit {
    username: string;
    password: string;

    constructor(
        private oathService: OathService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    login() {
        this.userService.loginUser(this.username, this.password)
            .subscribe(
                (rsp: UserModel) => {
                    this.oathService.setUserLocalStorageData(rsp);
                    this.oathService.setUserData(rsp);
                    this.router.navigate(['/main']);
                },
                error => console.log(error)
            );
    }
}

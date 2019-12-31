import { Component, OnInit } from '@angular/core';
import {OathService} from '../../services/oath.service';
import {Router} from '@angular/router';

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
        private router: Router
    ) { }

    ngOnInit() {
    }

    login() {
        // TODO call real login services
        this.oathService.setUserLocalStorageData(this.username);
        this.oathService.setUserData(this.username);
        this.router.navigate(['/main']);
    }
}

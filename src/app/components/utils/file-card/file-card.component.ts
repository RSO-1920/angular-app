import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-file-card',
    templateUrl: './file-card.component.html',
    styleUrls: ['./file-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileCardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

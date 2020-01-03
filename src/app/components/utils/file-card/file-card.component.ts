import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {File} from '../../../models/file';
@Component({
    selector: 'app-file-card',
    templateUrl: './file-card.component.html',
    styleUrls: ['./file-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileCardComponent implements OnInit {
    @Input() file: File;
    constructor() { }

    ngOnInit() {
        console.log(this.file);
    }

}

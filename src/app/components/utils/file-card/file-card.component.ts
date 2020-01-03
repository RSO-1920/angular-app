import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {File} from '../../../models/file';
import {environment} from '../../../../environments/environment';
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
        // console.log(this.file);
    }

    openFile() {
        const filePath: Array<string> = this.file.filePath.split('/');
        if (filePath.length === 2) {
            window.open(environment.url + 'filedownloader/v1/file/showInBrowser/' + filePath[0] + '/' + filePath[1], '_blank');
        }
    }

    downloadFile() {
        console.log('downloading file');
        const filePath: Array<string> = this.file.filePath.split('/');
        if (filePath.length === 2) {
            window.open(environment.url + 'filedownloader/v1/file/download/' + filePath[0] + '/' + filePath[1] );
        }
    }

    stream() {
        window.open(environment.url + 'streamer/v1/stream/' + this.file.fileId, '_blank' );
    }
}

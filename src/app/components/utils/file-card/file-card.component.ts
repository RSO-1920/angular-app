import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {File} from '../../../models/file';
import {environment} from '../../../../environments/environment';
import {ChannelService} from '../../../services/channel.service';
@Component({
    selector: 'app-file-card',
    templateUrl: './file-card.component.html',
    styleUrls: ['./file-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileCardComponent implements OnInit {
    @Input() file: File;
    @Input() channelId: number;
    @Output() fileDeletionSuccess: EventEmitter<boolean> = new EventEmitter();
    constructor(
        private channelService: ChannelService
    ) { }

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

    deleteFile() {
        console.log('file deletion');
        this.channelService.deleteFile(this.file.fileId, this.channelId)
            .subscribe(
                (rsp: any) => {
                    console.log('FILE DELETED: ', rsp);
                    this.fileDeletionSuccess.emit(true);
                },
                error => console.log(error)
            );
    }
}

export class Channel {
    channelId: number;
    adminId: number;
    channelName: string;
    channelType: string;
    bucketName: string;
}

export class Channels {
    channels: Array<Channel>;
}

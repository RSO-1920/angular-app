import {Model} from './Model';

export class Channel extends Model {
    channelId: number;
    adminId: number;
    channelName: string;
    channelType: ChannelType;
    bucketName: string;
}

export class Channels {
    channels: Array<Channel>;
}


class ChannelType extends  Model {
    typeId: number;
    typeName: string;
}

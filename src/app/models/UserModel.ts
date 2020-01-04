import {Model} from './Model';

export class UserModel extends Model {
    totp: boolean;
    lastName: string;
    access: AccessModel;
    createdTimestamp: number;
    authToken?: string;
    enabled: boolean;
    notBefore: number;
    disableableCredentialTypes: Array<any>;
    emailVerified: boolean;
    firstName: string;
    requiredActions: Array<any>;
    id: string;
    email: string;
    username: string;
}

class AccessModel extends Model {
    manageGroupMembership: boolean;
    view: boolean;
    mapRoles: boolean;
    impersonate: boolean;
    manage: boolean;
}

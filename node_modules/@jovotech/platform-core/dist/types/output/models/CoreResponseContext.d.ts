import { CoreResponseUser } from './CoreResponseUser';
import { Session } from './Session';
export declare class Request {
    id?: string;
}
export declare class CoreResponseContext {
    request: Request;
    session: Session;
    user: CoreResponseUser;
}

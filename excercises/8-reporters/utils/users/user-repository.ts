import {User} from './user';

export class UserRepository {

    public static admin() : User {
        return new User('admin', 'admin');
    }

}
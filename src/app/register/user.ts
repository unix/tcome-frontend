/**
 * Created by WittBulter on 2016/12/11.
 */

export class User {
    constructor (
        public createdAt: string,
        public email: string,
        public id: string,
        public token: string,
        public userTitle: string,
        public userType: string,
        public username: string
    ){
    }
}
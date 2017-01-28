/**
 * Created by WittBulter on 2016/12/11.
 */

export class Comment {
    constructor (
        public authorId: string,
        public authorName: string,
        public content: string,
        public createdAt: string,
        public id: string
    ){}
}
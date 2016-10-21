/**
 * Created by WittBulter on 2016/10/19.
 * List Model
 */

export class List {
    constructor(
        public title: string,       // 标题
        public createdAt: string,   // 创建日期
        public readTotal: number,   // 阅读数
        public commentTotal: number,// 评论数
    ){}
}
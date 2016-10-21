/**
 * Created by WittBulter on 2016/10/21.
 * Detail Model
 */

export class Detail {
    constructor(
        public id: string,              // id
        public title: string,           // 标题
        public content: string,         // 详情
        public authorId: string,        // 作者id
        public authorName: string,      // 作者名

        public createdAt: string,       // 创建日期
        public updatedAt: string,       // 更新日期
        public tags: string[],          // 标签
        public readTotal: number,       // 阅读数
        public commentTotal: number,    // 评论数
    ){}
}
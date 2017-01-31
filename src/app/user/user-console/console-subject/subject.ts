/**
 * Created by WittBulter on 2016/10/19.
 * List Model
 */

export class Subject {
    id: string              // id
    title: string           // 标题
    createdAt: string       // 创建日期
    readTotal: number       // 阅读数
    commentTotal: number    // 评论数
    articleType?: string
}
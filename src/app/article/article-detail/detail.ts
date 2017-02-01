/**
 * Created by WittBulter on 2016/10/21.
 * Detail Model
 */

export class Detail {
    id: string              // id
    title: string            // 标题
    content: string          // 详情
    authorId: string         // 作者id
    authorName: string       // 作者名
    avatar?: string
    thumbnail?: string

    createdAt: string       // 创建日期
    updatedAt: string        // 更新日期
    tags: string[]          // 标签
    readTotal: number        // 阅读数
    commentTotal: number    // 评论数
}
/**
 * Created by WittBulter on 2016/10/19.
 * List Model
 */
export interface BlogDescription {
    blogName?: string,
    blogSubhead?: string
}

export interface Option {
    blogName?: string        //博客名称
    blogSubhead?: string         //博客副标题
    recommended?: any[]
}
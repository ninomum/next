import { PostType } from '@/types/post'
import { mockPosts, mockPostDetails } from '@/mock/posts'

export async function getPosts(): Promise<PostType[]> {
    // 模拟异步获取数据
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPosts);
        }, 500);
    });
}

export async function getPostById(id: number): Promise<PostType | undefined> {
    // 模拟异步获取单篇文章
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPostDetails.find((post) => post.id === id));
        }, 500);
    });
}
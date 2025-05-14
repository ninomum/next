import { PostType } from '@/types/post'

const posts: PostType[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
];

export async function getPosts(): Promise<PostType[]> {
    // 模拟异步获取数据
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 500);
    });
}

export async function getPostById(id: number): Promise<PostType | undefined> {
    // 模拟异步获取单篇文章
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts.find((post) => post.id === id));
        }, 500);
    });
}

const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
];

export async function getPosts() {
    // 模拟异步获取数据
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 500);
    });
}
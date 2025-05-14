import { PostType } from '@/types/post'

export const mockPosts: PostType[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
];

// 详细数据
export const mockPostDetails: PostType[] = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the full content of the first post. It contains detailed information about the topic.',
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the full content of the second post. It dives deeper into advanced topics.',
    },
];
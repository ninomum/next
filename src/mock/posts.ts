import { PostType } from '@/types/post'

// 列表数据
export const mockPosts: PostType[] = [
    { id: 1, title: 'First Post', content: 'A brief summary of the first post.' },
    { id: 2, title: 'Second Post', content: 'A brief summary of the second post.' },
];

// 详细数据
export const mockPostDetails: PostType[] = [
    {
        id: 1,
        title: 'First Post',
        content: `
            This is the full content of the first post. It contains detailed information about the topic.
            - Introduction to the topic
            - Key points and examples
            - Conclusion and further reading
            The first post is designed to give readers a comprehensive understanding of the basics.
        `,
    },
    {
        id: 2,
        title: 'Second Post',
        content: `
            This is the full content of the second post. It dives deeper into advanced topics.
            - Advanced techniques and strategies
            - Real-world applications
            - Challenges and solutions
            The second post is aimed at readers who already have a foundational understanding and want to explore more.
        `,
    },
];
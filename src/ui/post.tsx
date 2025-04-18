import { PostType } from '@/types/post'

export function Post({ post }: { post: PostType }) {
    return (
        <li>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </li>
    );
}
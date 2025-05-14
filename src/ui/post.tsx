import { PostType } from '@/types/post';
import '@/styles/globals.scss';
import Link from 'next/link';
import { Button } from 'antd';

export function Post({ post }: { post: PostType }) {
    return (
        <li className="postItem">
            <Link href={`/blog/${post.id}`}>
                <article className="postCard">
                    <header>
                        <h2 className="postTitle">{post.title}</h2>
                    </header>
                    <p className="postContent">{post.content}</p>
                </article>
            </Link >
            <Link href={`/blog/${post.id}/edit`}>
                <Button type="primary">Edit</Button>
            </Link>
            <Link href={`/blog/${post.id}/history`}>
                <Button type="primary">History</Button>
            </Link>
        </li >
    );
}
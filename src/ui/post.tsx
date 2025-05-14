import { PostType } from '@/types/post';
import '@/styles/globals.scss';
import Link from 'next/link'

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
        </li >
    );
}
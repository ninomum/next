import { PostType } from '@/types/post';
import '@/styles/globals.scss';

export function Post({ post }: { post: PostType }) {
    return (
        <li className="postItem">
            <article className="postCard">
                <header>
                    <h2 className="postTitle">{post.title}</h2>
                </header>
                <p className="postContent">{post.content}</p>
            </article>
        </li>
    );
}
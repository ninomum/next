import { getPostById } from '@/lib/posts'
import { Post } from '@/ui/post'

export default async function Page({ params }: { params: { slug: string } }) {
  const postId = parseInt(params.slug, 10);
  const post = await getPostById(postId);

  return (
    <article>
      <h1>{post?.title}</h1>
      <div>{post?.content}</div>
    </article>
  )
}
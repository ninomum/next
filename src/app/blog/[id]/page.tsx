import { getPostById } from '@/lib/posts'

export default async function Page({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = await getPostById(postId);

  return (
    <article>
      <h1>{post?.title}</h1>
      <div>{post?.content}</div>
    </article>
  )
}
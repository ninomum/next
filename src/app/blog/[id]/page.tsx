import { getPostById } from '@/lib/posts'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = parseInt(id, 10);
  const post = await getPostById(postId);

  return (
    <article>
      <h1>{post?.title}</h1>
      <div>{post?.content}</div>
    </article>
  )
}
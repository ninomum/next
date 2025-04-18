import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'
import { PostType } from '@/types/post'

export default async function Page() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}
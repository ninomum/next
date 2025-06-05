import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'
import { PostType } from '@/types/post'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Blog List',
    description: 'Browse all blog posts.',
  }
}

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
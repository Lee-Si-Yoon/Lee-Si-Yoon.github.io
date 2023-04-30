import { getAllFilesFrontMatter } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PostLayout'
const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function CareerPage({ posts, initialDisplayPosts, pagination }) {
  return <>hi</>
}

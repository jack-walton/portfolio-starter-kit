import { RecentBlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jack Spencer Walton
      </h1>
      <p className="mb-4">
        {`I'm a writer, researcher, and content designer from Kansas City.`}
      </p>
      <div className="my-8">
        <RecentBlogPosts />
      </div>
    </section>
  )
}

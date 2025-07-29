import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  // Custom date formatting function to handle truncation and correct date parsing
  const formatCustomDate = (dateString) => {
    // Parse ISO date string (e.g., "2025-08-01")
    const [year, month, day] = dateString.split('-').map(Number);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const shortMonthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    // Use zero-based month index correctly (month - 1 for array access)
    const fullDate = `${monthNames[month - 1]} ${day}, ${year}`;
    
    // Truncate to short month if date string is longer than 10 characters
    if (fullDate.length > 10) {
      return `${shortMonthNames[month - 1]} ${day}, ${year}`;
    }
    return fullDate;
  };

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatCustomDate(post.metadata.publishedAt)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function RecentBlogPosts() {
  let allBlogs = getBlogPosts()

  // Custom date formatting function to handle truncation and correct date parsing
  const formatCustomDate = (dateString) => {
    // Parse ISO date string (e.g., "2025-08-01")
    const [year, month, day] = dateString.split('-').map(Number);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const shortMonthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    // Use zero-based month index correctly (month - 1 for array access)
    const fullDate = `${monthNames[month - 1]} ${day}, ${year}`;
    
    // Truncate to short month if date string is longer than 10 characters
    if (fullDate.length > 10) {
      return `${shortMonthNames[month - 1]} ${day}, ${year}`;
    }
    return fullDate;
  };

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .slice(0, 3)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatCustomDate(post.metadata.publishedAt)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
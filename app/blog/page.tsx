// ============================================================
// Blog Page — app/blog/page.tsx
// ============================================================
// HOW TO ADD A NEW POST:
//
//   1. Write your blog post anywhere (Hashnode, Medium, Dev.to,
//      your own domain — doesn't matter).
//   2. Scroll down to the `posts` array below.
//   3. Add a new object following this shape:
//
//        {
//          title:    "Your post title",
//          category: "Cloud Infrastructure",   // see CATEGORIES below
//          readTime: "6 min",
//          href:     "https://your-blog-link.com/post-slug",
//        }
//
//   4. Save the file. The new row appears on the site automatically
//      as a live, clickable link with a green "Read now" badge.
//
// HOW TO MARK A PLACEHOLDER (post you plan to write but haven't yet):
//   Same as above but OMIT the `href` field entirely.
//   The row will show "Coming soon" and won't be clickable.
//
// CATEGORIES (each has its own colour):
//   "Cloud Infrastructure"  → indigo
//   "Databricks"            → red/orange
//   "Finance"               → gold
//   "DevOps"                → cyan
//   (Add a new category in components/blog/blog-card.tsx → categoryColors)
// ============================================================

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata = {
  title: "Blog | Somil Jain",
  description: "Writing about AWS, Databricks, cloud infrastructure, and occasionally finance.",
}

// ============================================================
// ✏️  EDIT THIS ARRAY to manage your posts
//
// To publish a post:  add `href: "https://..."` to its object
// To add a new post:  add a new object to the array
// To reorder posts:   move objects up/down in the array
// ============================================================
const posts: { title: string; category: string; readTime: string; href?: string }[] = [
  {
    title: "Setting up an AWS Landing Zone from scratch — what no one tells you",
    category: "Cloud Infrastructure",
    readTime: "8 min",
    // href: "https://your-blog.com/aws-landing-zone",  ← uncomment & paste link when live
  },
  {
    title: "Databricks private connectivity on AWS — what actually matters",
    category: "Databricks",
    readTime: "6 min",
    // href: "https://your-blog.com/databricks-private",
  },
  {
    title: "AWS Well-Architected Framework: a practitioner's perspective",
    category: "Cloud Infrastructure",
    readTime: "7 min",
    // href: "https://your-blog.com/well-architected",
  },
  {
    title: "Unity Catalog in Databricks — understanding the data governance model",
    category: "Databricks",
    readTime: "5 min",
    // href: "https://your-blog.com/unity-catalog",
  },
  {
    title: "How I think about stock fundamentals as an engineer",
    category: "Finance",
    readTime: "5 min",
    // href: "https://your-blog.com/stock-fundamentals",
  },
]

export default function BlogPage() {
  const liveCount = posts.filter(p => p.href).length
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <ScrollProgress />
      <Navbar />

      <main className="relative pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Page header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Planning to write about AWS, Databricks, DevOps patterns, and occasionally finance.{" "}
              <span className="text-foreground/70">Watch this space.</span>
            </p>
          </div>

          {/* Stats bar — glass card */}
          <div className="flex items-center gap-6 mb-10 p-4 rounded-2xl glass-card">
            <div>
              <p className="text-xl font-bold text-foreground">{posts.length}</p>
              <p className="text-xs text-muted-foreground">Articles planned</p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div>
              <p className="text-xl font-bold text-foreground">{liveCount}</p>
              <p className="text-xs text-muted-foreground">Published</p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div>
              <p className="text-xl font-bold text-foreground">{categories.length}</p>
              <p className="text-xs text-muted-foreground">Topics</p>
            </div>
            <div className="h-8 w-px bg-border/50 hidden sm:block" />
            <div className="flex-1 hidden sm:block">
              <p className="text-xs text-muted-foreground font-mono">// first post coming soon</p>
            </div>
          </div>

          {/* Post list — driven by the `posts` array above */}
          <div>
            {posts.map((post, index) => (
              <BlogCard
                key={post.title}
                title={post.title}
                category={post.category}
                readTime={post.readTime}
                index={index}
                href={post.href}  // undefined = Coming soon; a URL = live link
              />
            ))}
          </div>

          {/* LinkedIn notify CTA — subtle glass */}
          <div className="mt-12 p-6 rounded-2xl glass-card text-center" style={{ borderColor: 'rgba(16,185,129,0.15)' }}>
            <p className="text-sm text-muted-foreground mb-1">Want to be notified when I publish?</p>
            <p className="text-sm">
              Connect with me on{" "}
              <a
                href="https://linkedin.com/in/somil-jain-600435228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

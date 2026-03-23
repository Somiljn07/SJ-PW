import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata = {
  title: "Blog | Somil Jain",
  description: "Writing about AWS, Databricks, and occasionally finance.",
}

const draftPosts = [
  {
    title: "Setting up an AWS Landing Zone from scratch",
    category: "Cloud Infrastructure",
    readTime: "8 min",
  },
  {
    title: "Databricks private connectivity on AWS - what actually matters",
    category: "Databricks",
    readTime: "6 min",
  },
  {
    title: "How I think about stock fundamentals as an engineer",
    category: "Finance",
    readTime: "5 min",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-5 tracking-tight">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Planning to write about AWS, Databricks, and occasionally finance. Watch this space.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {draftPosts.map((post) => (
              <BlogCard
                key={post.title}
                title={post.title}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

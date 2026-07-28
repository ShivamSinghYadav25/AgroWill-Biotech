import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/lib/site-data'

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.title}
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
        >
          <div className="relative aspect-16/10">
            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                {post.category}
              </span>
              <time>{post.date}</time>
            </div>
            <h3 className="mt-3 font-heading text-base font-semibold text-primary text-balance">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary">
              Read More
              <ArrowRight className="size-4" />
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}

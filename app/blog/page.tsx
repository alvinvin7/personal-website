import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-12">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article>
                <time className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                  {post.date}
                </time>
                <h2 className="text-lg font-semibold mt-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

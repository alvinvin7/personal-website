import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Hey, I&apos;m Alvin
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
          Software engineer at Snap in Sydney, working on the video calling
          experience in Snapchat. Primarily backend and operations — distributed
          systems, reliability, and the occasional cross-team project that bleeds
          into iOS, Android, or web.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/alvinvin7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <a
            href="https://www.linkedin.com/in/alvinfujito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Recent Posts
          </h2>
          <div className="space-y-5">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <p className="font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {post.title}
                </p>
                <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-0.5">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block mt-6 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            All posts →
          </Link>
        </section>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  return (
    <article>
      <header className="mb-10">
        <time className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
          {post.date}
        </time>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-3">
          {post.title}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          {post.description}
        </p>
      </header>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-a:underline-offset-2"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← All posts
        </Link>
      </div>
    </article>
  );
}

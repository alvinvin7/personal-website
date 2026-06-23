import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>

      <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p>
          I&apos;m Alvin, a software engineer based in Sydney, Australia. I
          spend most of my time building backend systems — APIs, data pipelines,
          infrastructure — the kind of things that keep products running reliably
          at scale.
        </p>

        <p>
          I started this site to have somewhere to write about things I&apos;m
          learning and building outside of work. Expect posts about software
          engineering, tools I find interesting, and the occasional personal
          project.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-10 mb-4">
          Experience
        </h2>
        <p>
          I work as a software engineer with a focus on backend development.
          {/* Update with your actual experience */}
        </p>

        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-10 mb-4">
          Skills
        </h2>
        <p>
          {/* Update with your actual skills */}
          Languages and tools I work with regularly — update this with your
          specific stack.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-10 mb-4">
          Contact
        </h2>
        <p>
          Best way to reach me is via{" "}
          <a
            href="https://linkedin.com/in/alvinfujito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/alvinfujito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

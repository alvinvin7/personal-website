import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

type Project = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Personal Website",
    description:
      "This site. Built with Next.js 15, Tailwind CSS v4, and deployed to Cloudflare Pages.",
    url: "https://github.com/alvinfujito/personal-website",
    tags: ["Next.js", "Tailwind", "Cloudflare"],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Projects</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-12">
        Things I&apos;ve built or am currently working on.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-semibold text-lg">{project.name}</h2>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ml-4 shrink-0"
                >
                  GitHub →
                </a>
              )}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer at Snap in Sydney, working on video calling in Snapchat.",
};

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-10">About</h1>

      <div className="space-y-12 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <section>
          <p className="text-lg">
            I&apos;m a software engineer at Snap in Sydney, working on the video
            calling experience in Snapchat — a feature used by millions of users
            who spend over 1.7B minutes per day on calls. My work is primarily
            backend and operations, but I&apos;ve shipped features end-to-end
            across iOS, Android, and web too.
          </p>
          <p className="mt-4">
            I&apos;m into making distributed systems more reliable, getting
            mobile clients to feel faster, and work that crosses team
            boundaries. Most of my biggest projects have meant contributing into
            adjacent codebases. Outside of work I like travelling, live music,
            running, and trying out different cuisines.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Experience
          </h2>

          <div className="space-y-10">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Software Engineer — Snap Inc.
                </h3>
                <span className="text-sm text-neutral-400 dark:text-neutral-500 shrink-0 ml-4">
                  Jan 2022 – Present
                </span>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-3">
                Sydney, NSW
              </p>
              <ul className="space-y-2 text-sm list-disc list-inside marker:text-neutral-300 dark:marker:text-neutral-600">
                <li>
                  Re-architected the calling backend from US-only to four global
                  regions.
                </li>
                <li>
                  Drove a multi-quarter call-notification reliability program
                  with the Notifications and Messaging teams.
                </li>
                <li>
                  Shipped Ring Again and other user-facing features requiring
                  state machine changes and cross-platform UI work.
                </li>
                <li>
                  Operations lead — active oncaller, own runbooks and incident
                  practice for the team.
                </li>
                <li>
                  Drove team adoption of AI dev workflows (Claude Code + AI code
                  review); onboarded two senior hires.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Computer Science Tutor — UNSW
                </h3>
                <span className="text-sm text-neutral-400 dark:text-neutral-500 shrink-0 ml-4">
                  May 2019 – Dec 2021
                </span>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-3">
                Sydney, NSW
              </p>
              <ul className="space-y-2 text-sm list-disc list-inside marker:text-neutral-300 dark:marker:text-neutral-600">
                <li>
                  Taught programming fundamentals (COMP1511) in C via tutorials
                  and labs.
                </li>
                <li>
                  Rated 5.76/6 in student satisfaction — above the CSE school,
                  Engineering Faculty, and university averages.
                </li>
                <li>Designed and wrote an assignment for COMP1511 in 21T3.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Education
          </h2>
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                UNSW
              </h3>
              <p className="text-sm mt-0.5">
                Bachelor of Science, Computer Science
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Distributed Systems",
              "Backend Engineering",
              "Incident Management",
              "Software Design",
              "iOS / Android",
              "Operations",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Contact
          </h2>
          <div className="flex gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/alvinfujito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alvinvin7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

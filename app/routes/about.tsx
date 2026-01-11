import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Pizza" },
    { name: "description", content: "A quick look at this Pizza project." },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-16">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            About
          </p>
          <h1 className="text-3xl font-semibold">Pizza, but make it fast.</h1>
          <p className="text-base leading-7 text-gray-600">
            This route exists to show routing in action. You can swap this
            content for your menu, story, or anything else.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
          <p className="font-medium text-gray-900">Tech stack</p>
          <p className="mt-2">
            Vite + React Router v7 + TypeScript + Tailwind CSS.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:border-gray-900 hover:text-gray-950"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

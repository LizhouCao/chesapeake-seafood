import Link from "next/link";
import { notFound } from "next/navigation";

import { categories } from "@/data/categories";
import { questions } from "@/data/questions";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const difficultyStyles = {
  easy: "bg-green-100 text-green-800 border-green-300",
  normal: "bg-amber-100 text-amber-800 border-amber-300",
  advanced: "bg-purple-100 text-purple-800 border-purple-300",
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const selectedCategory = categories.find(
    (item) => item.slug === category
  );

  if (!selectedCategory) {
    notFound();
  }

  const categoryQuestions = questions.filter(
    (question) => question.category === category
  );

  return (
    <main className="min-h-screen bg-sky-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="font-semibold text-sky-700 hover:underline"
        >
          ← Back to categories
        </Link>

        <h1 className="mt-10 text-5xl font-bold text-sky-950">
          {selectedCategory.name}
        </h1>

        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-gray-700">
          {selectedCategory.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categoryQuestions.map((question) => (
            <Link
              key={question.slug}
              href={`/questions/${question.slug}`}
              className="block rounded-xl border border-sky-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-sky-900">
                  {question.title}
                </h2>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${difficultyStyles[question.difficulty]
                    }`}
                >
                  {question.difficulty}
                </span>
              </div>

              <p className="mt-3 text-gray-600">
                {question.question}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
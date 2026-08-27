import CategoryTile from "@/components/CategoryTile";
import { categories } from "@/data/categories";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sky-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-5xl font-bold text-sky-950">
          Chesapeake Bay Seafood Explorer
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-gray-700">
          Choose a category to explore questions and answers about Chesapeake
          Bay seafood.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryTile
              key={category.slug}
              name={category.name}
              description={category.description}
              image={category.image}
              imageCredit={category.imageCredit}
              imageCreditUrl={category.imageCreditUrl}
              href={`/categories/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
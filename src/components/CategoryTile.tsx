import Image from "next/image";
import Link from "next/link";

type CategoryTileProps = {
  name: string;
  description: string;
  image: string;
  href: string;
  imageCredit?: string;
  imageCreditUrl?: string;
};

export default function CategoryTile({
  name,
  description,
  image,
  href,
  imageCredit,
  imageCreditUrl,
}: CategoryTileProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-sky-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="group block">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-sky-900">
            {name}
          </h2>

          <p className="mt-3 text-gray-600">
            {description}
          </p>
        </div>
      </Link>

      {imageCredit && (
        <div className="border-t border-gray-100 px-6 py-2 text-xs text-gray-500">
          {imageCreditUrl ? (
            <a
              href={imageCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700 hover:underline"
            >
              Photo: {imageCredit}
            </a>
          ) : (
            <span>Photo: {imageCredit}</span>
          )}
        </div>
      )}
    </div>
  );
}
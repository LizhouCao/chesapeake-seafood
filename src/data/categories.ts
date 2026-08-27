export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageCredit?: string;
  imageCreditUrl?: string;
};

export const categories: Category[] = [
  {
    slug: "chesapeake-bay",
    name: "Chesapeake Bay",
    description: "Explore the bay.",
    image: "/categories/chesapeake-bay.png",
    imageCredit: "Photo by Will Parson/Chesapeake Bay Program with aerial support by Southwings",
    imageCreditUrl: "https://www.chesapeakebay.net/news/blog/how-to-reach-a-healthier-more-productive-chesapeake-bay-watershed"
  },
  {
    slug: "blue-crabs",
    name: "Blue Crabs",
    description: "Learn about blue crab biology, behavior, and seafood science.",
    image: "/categories/blue-crabs.png",
  },
  {
    slug: "eastern-oysters",
    name: "Eastern Oysters",
    description: "Explore oyster biology and their role in Chesapeake Bay.",
    image: "/categories/eastern-oyster.png",
  },
  {
    slug: "blue-catfish",
    name: "Blue Catfish",
    description: "Explore blue catfish.",
    image: "/categories/blue-catfish.png",
  },
  {
    slug: "fishing-and-crabbing",
    name: "Fishing and Crabbing",
    description: "Learn about fishing and crabbing in the Chesapeake Bay.",
    image: "/categories/fishing-crabbing.png",
  },
  {
    slug: "seafood-and-human-health",
    name: "Seafood Health",
    description: "Learn about the health benefits of consuming seafood.",
    image: "/categories/seafood-health.png",
  },
  {
    slug: "salmon-ras",
    name: "Salmon & RAS",
    description: "Discover salmon species found in and around Chesapeake Bay.",
    image: "/categories/salmon.png",
  },
  {
    slug: "S3AM",
    name: "Smart Sustainable Shellfish (S3AM)",
    description: "Learn about the S3AM project and its impact on sustainable shellfish farming.",
    image: "/categories/s3am.png",
  }
];
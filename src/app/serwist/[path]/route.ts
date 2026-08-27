import { createSerwistRoute } from "@serwist/turbopack";

import { categories } from "@/data/categories";
import { questions } from "@/data/questions";

const revision =
    process.env.VERCEL_GIT_COMMIT_SHA ?? "local-development";

const pageUrls = [
    "/",
    "/~offline",
    ...categories.map((category) => `/categories/${category.slug}`),
    ...questions.map((question) => `/questions/${question.slug}`),
];

const additionalPrecacheEntries = [...new Set(pageUrls)].map((url) => ({
    url,
    revision,
}));

export const {
    dynamic,
    dynamicParams,
    revalidate,
    generateStaticParams,
    GET,
} = createSerwistRoute({
    additionalPrecacheEntries,
    swSrc: "src/app/sw.ts",
    useNativeEsbuild: true,
});
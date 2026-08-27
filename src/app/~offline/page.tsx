import Link from "next/link";

export default function OfflinePage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
            <div className="max-w-lg rounded-2xl border border-sky-200 bg-white p-8 text-center shadow-lg">
                <h1 className="text-3xl font-bold text-sky-950">
                    You&apos;re Offline
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    This page was not saved for offline use. Return to the homepage and
                    choose one of the downloaded questions.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-full bg-sky-700 px-6 py-3 font-semibold text-white"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
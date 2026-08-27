"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { categories } from "@/data/categories";
import { questions } from "@/data/questions";

export default function OfflineSetupPage() {
    const imageUrls = useMemo(
        () =>
            [...new Set([
                ...categories.map((category) => category.image),
                ...questions.flatMap((question) => [
                    question.questionImage,
                    question.answerImage,
                ]),
            ])],
        [],
    );

    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [failed, setFailed] = useState(0);

    const finished = started && index >= imageUrls.length;
    const currentImage = imageUrls[index];

    async function startPreparation() {
        if ("serviceWorker" in navigator) {
            await navigator.serviceWorker.ready;

            if (!navigator.serviceWorker.controller) {
                window.location.reload();
                return;
            }
        }

        setStarted(true);
    }

    function loadNextImage() {
        setIndex((current) => current + 1);
    }

    function handleImageError() {
        setFailed((current) => current + 1);
        loadNextImage();
    }

    const progress =
        imageUrls.length === 0
            ? 100
            : Math.min(100, Math.round((index / imageUrls.length) * 100));

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#EFF5FB] px-6 py-10">
            <section className="w-full max-w-2xl rounded-2xl border border-sky-200 bg-white p-8 text-center shadow-lg">
                <h1 className="text-3xl font-bold text-sky-950">
                    Prepare for Offline Use
                </h1>

                <p className="mt-4 text-gray-700">
                    Keep this page open and remain connected to the internet until the
                    preparation is complete.
                </p>

                {!started && (
                    <button
                        type="button"
                        onClick={startPreparation}
                        className="mt-7 rounded-full bg-sky-700 px-7 py-3 font-semibold text-white"
                    >
                        Download Offline Content
                    </button>
                )}

                {started && !finished && (
                    <>
                        <div className="mt-7 h-3 overflow-hidden rounded-full bg-sky-100">
                            <div
                                className="h-full bg-sky-600 transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <p className="mt-3 font-semibold text-sky-900">
                            {index + 1} of {imageUrls.length} images
                        </p>

                        <div className="relative mx-auto mt-5 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                            <Image
                                key={currentImage}
                                src={currentImage}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-contain"
                                priority
                                onLoad={loadNextImage}
                                onError={handleImageError}
                            />
                        </div>
                    </>
                )}

                {finished && (
                    <div className="mt-7 rounded-xl bg-green-100 p-5 text-green-900">
                        <p className="text-xl font-bold">Offline preparation complete</p>

                        <p className="mt-2">
                            {failed === 0
                                ? "All images were downloaded successfully."
                                : `${failed} images could not be downloaded. Run the preparation again while online.`}
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}
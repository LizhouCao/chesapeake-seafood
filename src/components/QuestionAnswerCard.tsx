"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  categoryThemes,
  type CategoryTheme,
} from "@/data/categoryThemes";

const defaultTheme: CategoryTheme = {
  primary: "#0369a1",
  dark: "#0c4a6e",
  light: "#e0f2fe",
  border: "#7dd3fc",
};

type QuestionAnswerCardProps = {
  title: string;
  question: string;
  answer: string;
  questionImage: string;
  answerImage: string;
  additionalText?: string;
  category: string;
  backHref: string;
};

export default function QuestionAnswerCard({
  title,
  question,
  answer,
  questionImage,
  answerImage,
  additionalText,
  category,
  backHref,
}: QuestionAnswerCardProps) {
  const theme = categoryThemes[category] ?? defaultTheme;

  const themeVariables = {
    "--theme-primary": theme.primary,
    "--theme-dark": theme.dark,
    "--theme-light": theme.light,
    "--theme-border": theme.border,
  } as CSSProperties;

  const [showAnswer, setShowAnswer] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const currentImage = showAnswer ? answerImage : questionImage;

  const currentAlt = showAnswer
    ? `Answer to ${title}: ${answer}`
    : `Question: ${question}`;

  useEffect(() => {
    document.body.style.overflow = showMore ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMore]);

  function handleTouchStart(event: React.TouchEvent<HTMLButtonElement>) {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    didSwipe.current = false;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLButtonElement>) {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];

    const distanceX = touch.clientX - touchStartX.current;
    const distanceY = touch.clientY - touchStartY.current;

    const swipeThreshold = 70;

    const isHorizontalSwipe =
      Math.abs(distanceX) > Math.abs(distanceY) &&
      Math.abs(distanceX) >= swipeThreshold;

    if (isHorizontalSwipe) {
      didSwipe.current = true;

      if (distanceX < 0) {
        setShowAnswer(true);
      } else {
        setShowAnswer(false);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  }

  function handleCardClick() {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }

    setShowAnswer((current) => !current);
  }

  function openAdditionalInformation(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) {
    event.stopPropagation();
    setShowMore(true);
  }

  return (
    <>
      <Link
        href={backHref}
        aria-label="Back to category"
        style={themeVariables}
        className="
          fixed
          left-4
          top-4
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[var(--theme-border)]
          bg-white
          text-2xl
          font-bold
          text-[var(--theme-dark)]
          shadow-md
          transition
          hover:bg-[var(--theme-light)]
          sm:left-6
          sm:top-6
        "
      >
        ←
      </Link>

      <div
        style={themeVariables}
        className="
          relative
          flex
          aspect-[16/9]
          h-full
          w-full
          max-h-[88dvh]
          min-h-0
          flex-col
          overflow-visible
          rounded-2xl
          border-4
          border-[var(--theme-border)]
          bg-[var(--theme-light)]
          p-2
          shadow-lg
          sm:p-3
        "
      >
        <div
          className="
          absolute
          left-3
          top-3
          z-20
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border-4
          border-[var(--theme-primary)]
          bg-white
          text-2xl
          font-bold
          text-[var(--theme-dark)]
          shadow-md
          sm:h-14
          sm:w-14
          sm:text-3xl
        "
        >
          {showAnswer ? "A" : "Q"}
        </div>

        <button
          type="button"
          onClick={handleCardClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label={
            showAnswer
              ? "Showing the answer. Tap to return to the question."
              : "Showing the question. Tap to reveal the answer."
          }
          className="
            relative
            min-h-0
            flex-1
            touch-pan-y
            overflow-hidden
            rounded-xl
            bg-[#EFF5FB]
            text-left
            focus-visible:outline
            focus-visible:outline-4
            focus-visible:outline-offset-2
            focus-visible:outline-[var(--theme-primary)]
          "
        >
          <div
            key={showAnswer ? "answer" : "question"}
            className={`relative h-full w-full ${showAnswer
              ? "animate-[slideInFromRight_0.3s_ease-out]"
              : "animate-[slideInFromLeft_0.3s_ease-out]"
              }`}
          >
            <Image
              src={currentImage}
              alt={currentAlt}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>
        </button>

        <div className="flex shrink-0 items-center justify-between gap-3 px-2 pb-1 pt-2">
          <p className="text-xs font-semibold text-[var(--theme-primary)] sm:text-sm">
            {showAnswer
              ? "Swipe right or tap to return"
              : "Swipe left or tap for the answer"}
          </p>

          {showAnswer && additionalText && (
            <button
              type="button"
              onClick={openAdditionalInformation}
              className="
                shrink-0
                rounded-full
                bg-[var(--theme-primary)]
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:brightness-90
                sm:px-5
                sm:text-sm
              "
            >
              Explore More
            </button>
          )}
        </div>
      </div>

      {showMore && additionalText && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="additional-material-title"
          style={themeVariables}
          className="
            fixed
            inset-0
            z-50
            overflow-y-auto
            bg-[var(--theme-light)]
          "
        >
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-5 py-5 sm:px-8 md:px-12">
            <header className="flex items-center justify-between border-b border-[var(--theme-border)] pb-4">
              <h2
                id="additional-material-title"
                className="text-2xl font-bold text-[var(--theme-dark)] sm:text-3xl"
              >
                Explore More
              </h2>

              <button
                type="button"
                onClick={() => setShowMore(false)}
                aria-label="Close additional information"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--theme-border)]
                  bg-white
                  text-2xl
                  font-bold
                  text-[var(--theme-dark)]
                  shadow-sm
                  transition
                  hover:bg-[var(--theme-light)]
                "
              >
                ×
              </button>
            </header>

            <main className="flex-1 py-6">
              <h3 className="text-2xl font-bold leading-tight text-[var(--theme-dark)] sm:text-3xl md:text-4xl">
                {title}
              </h3>

              <div className="mt-6 rounded-2xl border border-[var(--theme-border)] bg-white p-5 shadow-md sm:p-7">
                <p className="whitespace-pre-line text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {additionalText}
                </p>
              </div>
            </main>

            <button
              type="button"
              onClick={() => setShowMore(false)}
              className="
                mx-auto
                mb-3
                rounded-full
                bg-[var(--theme-primary)]
                px-7
                py-3
                font-semibold
                text-white
                shadow-sm
                transition
                hover:brightness-90
              "
            >
              Return to Answer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
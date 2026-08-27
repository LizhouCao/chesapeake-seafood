import { notFound } from "next/navigation";
import QuestionAnswerCard from "@/components/QuestionAnswerCard";
import { questions } from "@/data/questions";

type QuestionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function QuestionPage({
  params,
}: QuestionPageProps) {
  const { slug } = await params;

  const selectedQuestion = questions.find(
    (question) => question.slug === slug
  );

  if (!selectedQuestion) {
    notFound();
  }

  return (
    <main className="h-dvh overflow-hidden bg-sky-50 p-3 sm:p-4 md:p-6">
      <div className="mx-auto h-full w-full max-w-5xl">
        <QuestionAnswerCard
          title={selectedQuestion.title}
          question={selectedQuestion.question}
          answer={selectedQuestion.answer}
          questionImage={selectedQuestion.questionImage}
          answerImage={selectedQuestion.answerImage}
          additionalText={selectedQuestion.additionalText}
          category={selectedQuestion.category}
          backHref={`/categories/${selectedQuestion.category}`}
        />
      </div>
    </main>
  );
}
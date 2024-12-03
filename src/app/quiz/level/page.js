"use client";

import dynamic from "next/dynamic";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// 동적 import로 클라이언트 사이드에서만 렌더링되도록 설정
const LevelQuiz = dynamic(
  () => import("@/components/sections/quiz/LevelQuiz"),
  { ssr: false }
);

const LevelQuizPage = () => {
  return (
    <PageWrapper>
      <main>
        <LevelQuiz />
      </main>
    </PageWrapper>
  );
};

export default LevelQuizPage;

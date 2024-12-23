"use client";
import LevelSelection from "@/components/sections/quiz/LevelSelection"; // section -> sections로 수정
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import ThemeController from "@/components/shared/others/ThemeController";

export const metadata = {
  title: "Level Selection",
  description: "Select your quiz difficulty level",
};

const LevelPage = () => {
  return (
    <PageWrapper>
      <main>
        <LevelSelection />
      </main>
    </PageWrapper>
  );
};

export default LevelPage;

import LessonQuizResults from "@/components/shared/lesson-quiz/LessonQuizResults";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Lesson Quiz | Edurock - Education LMS Template",
  description: "Lesson Quiz | Edurock - Education LMS Template",
};
const Lesson_Quiz_Result = () => {
  return (
    <PageWrapper>
      <main>
        <LessonQuizResults />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Lesson_Quiz_Result;

import GrammarTopicSelection from "@/components/sections/quiz/GrammarTopicSelection";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import ThemeController from "@/components/shared/others/ThemeController";

export const metadata = {
  title: "Grammar Quiz ",
  description: "Grammar Quiz",
};

const GrammarQuizPage = () => {
  return (
    <PageWrapper>
      <main>
        <GrammarTopicSelection />
      </main>
    </PageWrapper>
  );
};

export default GrammarQuizPage;

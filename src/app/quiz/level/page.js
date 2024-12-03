import LevelSelection from "@/components/sections/quiz/LevelSelection";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Select Your Level | Korean Quiz",
  description: "Choose your Korean proficiency level for the quiz",
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

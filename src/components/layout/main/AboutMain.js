import About11 from "@/components/sections/abouts/About11";
import Brands from "@/components/sections/brands/Brands";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import Overview from "@/components/sections/overviews/Overview";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const AboutMain = () => {
  return (
    <>
      <About11 />
      <Overview />
      <FeatureCourses
        title={
          <>
            Choose The Best Package <br />
            For your Learning
          </>
        }
        course="2"
        subTitle="Popular Courses"
      />
      <Testimonials />
      <Brands />
    </>
  );
};

export default AboutMain;

import Hero from "../../components/Hero/Hero";
import Highlight from "../../components/Highlight/Highlight";
import AD1 from "../../assets/gallery/AD1.jpg";
import Subhighlight from "./components/Subhighlight";
import { useEffect } from "react";
import Faqs from "./components/Faqs";
import Location from "../../components/Location/Location";
import FooterSection from "../Home/components/FooterSection";

function Admissions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero type="admissions" />
      <Highlight type={2} image={AD1}>
        <div className={`ml-24 flex flex-col justify-start gap-5 mt-24`}>
          <h2 className="text-header font-thin">Framework and Approach</h2>
          <p className="sm:text-1xl md:text-2xl lg:text-3xl font-thin leading-10 mt-10">
            The school’s learning programs are designed around the K-12
            Curriculum and Learning Management Matrix established by the
            Department of Education, ensuring a solid foundation aligned with
            both national guidelines and global standards.
          </p>
          <p className="sm:text-1xl md:text-2xl lg:text-3xl font-thin leading-10">
            This comprehensive framework emphasizes not only academic excellence
            but also holistic development, integrating essential skills and
            values that prepare learners to thrive in a rapidly changing,
            interconnected world.
          </p>
          <p className="sm:text-1xl md:text-2xl lg:text-3xl font-thin leading-10">
            By embracing innovative teaching methods and a well-rounded
            curriculum, the school fosters critical thinking, creativity, and a
            lifelong love of learning among its students.
          </p>
        </div>
      </Highlight>
      <Subhighlight />
      <Location />
      <Faqs />
      <FooterSection />
    </div>
  );
}

export default Admissions;

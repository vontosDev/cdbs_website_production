import Hero from "../../components/Hero/Hero";
import DescriptionsSection from "./components/DescriptionsSection";
import P1 from "../../assets/gallery/P1.jpg";
import P2 from "../../assets/gallery/P2.jpg";
import P3 from "../../assets/gallery/P3.jpg";
import P4 from "../../assets/gallery/P4.jpg";
import P5 from "../../assets/gallery/P5.jpg";
import Highlight from "../../components/Highlight/Highlight";
import FooterSection from "../Home/components/FooterSection";
import { useEffect } from "react";

function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero type="programs" />
      <DescriptionsSection
        title1="Kindergarten"
        para1a="In Kindergarten, learners develop a personal relationship with God through simple prayers and engaging discussions. They acquire essential life and language skills while fostering a love for their country and caring for the environment. "
        para1b="Social interactions spark creativity, as children learn polite expressions and practice obedience to routines, laying a strong foundation for their holistic growth."
        title2="Grade School"
        para2a="In Grade School, students deepen their relationship with God by observing Catholic practices in the Salesian way of life. They enhance literacy and higher-order thinking skills through a Performance-Based Learning Approach while developing lifelong learning through fair play and collaboration. "
        para2b="A strong sense of nationalism and environmental care is fostered, as students find joy in serving others and participating in daily activities."
        title3="Junior High School"
        para3a="In Junior High School, learners deepen their sense of nationalism and environmental stewardship while gaining technology literacy through project-based learning. They develop problem-solving skills and positive work habits, recognizing their worth as God’s masterpieces and embodying Gospel values."
        para3b="Active participation in community service fosters servant leadership, empowering students to integrate and apply their knowledge and higher-order thinking skills in real-life situations, preparing them for meaningful contributions to society."
        title4="Senior High School"
        para4a="In Senior High School, learners manifest servant leadership by conducting impactful research aligned with the school’s advocacies. They exemplify academic excellence, gaining admission to their university of choice while receiving career guidance to identify their future paths."
        para4b="Through various activities emphasizing openness, respect, and interdependence, students prepare to thrive in a multicultural community and a global environment, equipping them for success in an interconnected world."
        image1={P1}
        image2={P2}
        image3={P3}
        image4={P4}
      />
      <Highlight type={1} image={P5}>
        <div className={`ml-24 flex flex-col gap-5 mt-24`}>
          <p className="text-3xl font-thin leading-10">
            <p>Faith Dimension General Objective:</p>
            To nurture a strong Christian faith and Salesian spirituality,
            fostering personal devotion to Mary and Jesus while guiding learners
            toward upright citizenship and meaningful vocations.
          </p>
          <p className="text-3xl font-thin leading-10">
            <p>Academic Dimension General Objective:</p>
            To build academic competence through the K-12 curriculum,
            emphasizing mastery of essential concepts and lifelong learning
            skills for future success.
          </p>
          <p className="text-3xl font-thin leading-10">
            <p>Technical Dimension General Objective:</p>
            To develop technical knowledge and skills in basic and advanced
            processes, preparing learners for 21st-century tools through the
            K-12 program and electives.
          </p>
          <p className="text-3xl font-thin leading-10">
            <p>Social Dimension General Objective:</p>
            To instill pride and responsible citizenship by embracing cultural
            heritage and encouraging charitable service, aligned with Catholic
            principles.
          </p>
          <p className="text-3xl font-thin leading-10">
            <p>Growth Dimension General Objective:</p>
            To enhance self-discipline and socio-emotional maturity, fostering
            effective interpersonal skills through homeroom programs and
            guidance activities.
          </p>
        </div>
      </Highlight>
      <FooterSection />
    </div>
  );
}

export default Programs;

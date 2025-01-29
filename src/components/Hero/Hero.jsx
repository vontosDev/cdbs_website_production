import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import video from "../../assets/videos/sample.mp4";
import "../../styles/styles.css";

Hero.propTypes = {
  type: PropTypes.string,
};

function Hero({ type }) {
  const wrapLetters = (text, indexOffset = 0) => {
    return text.split("").map((letter, index) => {
      if (letter === " ") {
        return <span key={index + indexOffset}>&nbsp;</span>; // Preserve spaces
      }
      return (
        <span key={index + indexOffset} style={{ "--i": index }}>
          {letter}
        </span>
      );
    });
  };

  const textLines = (textArray) => {
    return textArray.map((text, index) => (
      <h2
        className="text-hero font-thin leading-relaxed typing-effect"
        key={index}
      >
        {wrapLetters(text, index * 100)}
      </h2>
    ));
  };

  let component;

  switch (type) {
    case "gallery":
      component = (
        <div className="container-about">
          <div className="pl-10 justify-self-start">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin typing-effect">
                {wrapLetters("GALLERY")}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-thin typing-effect italic">
                {wrapLetters("Moments of Learning and Growth")}
              </h2>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-10">
            <div className="flex flex-col text-1xl">
              {textLines([
                "The Gallery showcases the vibrant life of Caritas Don Bosco School,",
                "capturing moments that reflect our core values and holistic development journey.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "It features images of students engaging in academic pursuits, community service, cultural celebrations,",
                "and spiritual activities. Each photograph tells a story of growth, collaboration, and the joy of learning.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "From classroom projects to school events, the Gallery offers a glimpse into the experiences that shape",
                "our learners into global thinkers, servant-leaders, and conscientious citizens.",
              ])}
            </div>
          </div>
        </div>
      );
      break;
    case "admissions":
      component = (
        <div className="container-about">
          <div className="pl-10 justify-self-start">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin typing-effect">
                {wrapLetters("ADMISSIONS")}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-thin typing-effect italic">
                {wrapLetters("Join Our Growing Community")}
              </h2>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-10">
            <div className="flex flex-col text-1xl">
              {textLines([
                "The Admissions section provides essential information for prospective students and families interested",
                "in joining Caritas Don Bosco School. It outlines the application process requirements, and key dates,",
                "making it easy to navigate the journey from inquiry to enrollment. ",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "Here, you’ll find details about our holistic K-12 programs, which emphasize academic",
                "excellence, technical skills, spiritual growth, and community involvement.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "We welcome learners who are eager to grow in a supportive environment that nurtures their.",
                " potential and prepares them for a meaningful future.",
              ])}
            </div>
          </div>
        </div>
      );
      break;
    case "home":
      component = (
        <div className="video-container overflow-hidden">
          <div className="bg-blue-overlay w-full h-[900px] z-10 absolute top-0"></div>
          <video autoPlay={true} muted={true} loop={true}>
            <source src={video} />
          </video>
          <div className="w-100 z-10 absolute left-0 top-title pl-10">
          <div className="flex flex-col gap-5 mb-10">
  <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin text-brand typing-effect">
    {wrapLetters("CARITAS DON BOSCO")}
  </h1>
  <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin text-brand typing-effect">
    {wrapLetters("SCHOOL")}
  </h1>
</div>

            <div className="flex flex-row gap-8">
              <NavLink to="/admissions">
              <Button text="INQUIRE NOW" btnType={2} />
            </NavLink>
            <NavLink to="/about">
              <Button text="LEARN MORE" btnType={1} />
              </NavLink>  
            </div>
          </div>
          <span className="inline-block italic text-xs sm:text-2xl lg:text-3xl font-thin mb-12 text-white absolute bottom-0 left-10 z-50 typing-effect">
  {wrapLetters('"I Love, Therefore, I Serve"')}
</span>

        </div>
      );
      break;
    case "about":
      component = (
        <div className="container-about">
          <div className="pl-10 justify-self-start">
            <div className="flex flex-col gap-5 pt-20">
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin typing-effect text-center sm:text-left lg:text-left">
              {wrapLetters("ABOUT US")}
            </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-thin typing-effect italic">
                {wrapLetters("Our Story and Values")}
              </h2>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-10">
            <div className="flex flex-col text-1xl">
              {textLines([
                "The Caritas Sisters of Jesus congregation was founded in 1937 by Salesian Italian priests in Miyazaki, Japan.",
                "The congregation was led by Fr. Antonio Cavoli, SDB, as its founder, with Venerable Vincent Cimatti,",
                "SDB, as the co-founder. They named the congregation “Caritas” to reflect their love and deep concern",
                "for the poor.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "The sisters' love and self-sacrificing service for the abandoned captured the hearts of many non-Catholics,",
                "leading them to God and expanding their influence beyond the Catholic community.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "What began as a small seed of hope grew into a thriving mission. Today, this missionary presence has",
                "spread across 16 countries, with approximately 1,000 sisters of diverse nationalities, dedicated to",
                "serving others with compassion.",
              ])}
            </div>
          </div>
        </div>
      );
      break;
    case "programs":
      component = (
        <div className="container-about">
          <div className="pl-10 justify-self-start">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-thin typing-effect">
                {wrapLetters("PROGRAMS")}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-thin typing-effect italic">
                {wrapLetters("Pathways to Holistic Education")}
              </h2>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-10">
            <div className="flex flex-col text-1xl">
              {textLines([
                "Caritas Don Bosco School is dedicated to developing learners who are global thinkers, servant-leaders, and",
                "conscientious collaborators. By integrating a holistic project-based learning approach into the K to 12",
                "curriculum, the school aims to provide students with meaningful experiences that encourage critical thinking",
                "and real-world problem-solving. ",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "This innovative educational framework fosters a deeper understanding of diverse perspectives and cultures",
                "empowering students to engage actively in their communities.",
              ])}
            </div>
            <div className="flex flex-col text-1xl">
              {textLines([
                "Through this approach, Caritas Don Bosco School is committed to realizing its mission of nurturing well-",
                "rounded individuals prepared to contribute positively to society and make a difference in the world.",
              ])}
            </div>
          </div>
        </div>
      );
      break;
    default:
      component = (
        <div className="container-about">
          <div className="pl-10 justify-self-start">
            <div className="flex flex-col gap-5">
              <h1 className="text-8xl font-thin typing-effect">
                {wrapLetters("DEFAULT TITLE")}
              </h1>
              <h2 className="text-3xl font-thin typing-effect">
                {wrapLetters("Default Subtitle")}
              </h2>
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex flex-col gap-10">
              {textLines(["Default text here.", "More default text here."])}
            </div>
          </div>
        </div>
      );
  }

  return (
    <>
      <div className="h-hero">{component}</div>
      <div className="px-10 z-10">
  <div className="w-full h-48 px-10 border-t border-brand">
    <div className="hidden md:flex h-full items-center justify-end md:gap-20 lg:gap-64 mr-20">
      <NavLink to="/about">
        <span className="text-xl sm:text-2xl lg:text-3xl hover:cursor-pointer">About Us</span>
      </NavLink>
      <NavLink to="/programs">
        <span className="text-xl sm:text-2xl lg:text-3xl hover:cursor-pointer">Programs</span>
      </NavLink>
      <NavLink to="/admissions">
        <span className="text-xl sm:text-2xl lg:text-3xl hover:cursor-pointer">Admissions & Enrollment</span>
      </NavLink>
      <NavLink to="/gallery">
        <span className="text-xl sm:text-2xl lg:text-3xl hover:cursor-pointer">Gallery</span>
      </NavLink>
    </div>
  </div>
</div>


    </>
  );
}

export default Hero;

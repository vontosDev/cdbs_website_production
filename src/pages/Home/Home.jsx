import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import Hero from "../../components/Hero/Hero";
import NewsSection from "./components/NewsSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero type="home" />
      <AboutSection />
      <NewsSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}

export default Home;

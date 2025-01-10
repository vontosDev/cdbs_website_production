import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import FooterSection from "../Home/components/FooterSection";
import Hero from "../../components/Hero/Hero";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Location from "../../components/Location/Location";
import AB5 from "../../assets/gallery/AB5.png";
import ArrowR from "../../assets/images/arrowforward.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function AboutUs() {



  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let revealContainers = document.querySelector(".reveal");
    console.log(revealContainers);

    [revealContainers].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart reverse restart reverse",
          start: "top 70%",
          onEnter: () => container.classList.add("opacity-100"),
          // onLeaveBack: () => container.classList.remove("opacity-100"),
        },
      });

      // tl.set(container, { autoAlpha: 1 });

      tl.fromTo(
        container,
        0.9,
        {
          yPercent: 100,
          delay: -1.5,
          ease: "power2.out",
        },
        {
          yPercent: -5,
          delay: -1.5,
          ease: "power2.out",
        }
      );
      tl.from(image, 0.9, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        yPercent: 5,
        scale: 1,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  }, []);






  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger continuously while scrolling
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div>
      <Hero type="about" />
      <Feature1 />
      <Feature2 />
      <Location />

      <div className="mt-10 border border-black overflow-hidden mx-20 w-[70%] h-[320px] ml-auto flex flex-row items-center px-5 py-5">
        <div
          className="w-[40%] h-full"
          ref={ref}
        >




          <div className="reveal">
          <img
            src={AB5}
            alt="Alumni Image"
            className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${inView ? "transform translate-y-0" : "transform translate-y-20"}`}
          />
          </div>
        </div>






        <div className="flex flex-col gap-10 justify-center h-full w-[60%]">
          <h2 className="text-6xl font-thin pl-10">Don Bosco Alumni Community</h2>
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-thin leading-10 pl-10">
              The Alumni Community is a dedicated space to celebrate the achievements and updates of Caritas Don Bosco School graduates.
            </p>
            <p className="text-3xl font-thin leading-10 pl-10">
              Here, alumni can share personal milestones, professional accomplishments, and community contributions, strengthening ties within the CDBS family.
            </p>
            <div className="flex justify-end items-center gap-4 mt-10">
              <p className="text-3xl font-bold leading-10">Alumni Forum</p>
              <img src={ArrowR} alt="Alumni Forum Icon" className="w-8 h-8 object-contain w-[120px] pr-20" />
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default AboutUs;

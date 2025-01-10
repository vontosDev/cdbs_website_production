// import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import H3 from "../../../assets/gallery/H3.jpg";
import H4 from "../../../assets/gallery/H4.jpg";
import H5 from "../../../assets/gallery/H5.jpg";
import H6 from "../../../assets/gallery/H6.jpg";

function FeatureSection() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let currentIndex = -1;
    let animating;
    let swipePanels = gsap.utils.toArray(".swipe-section .panel");

    // set second panel two initial 100%
    gsap.set(".x-100", { yPercent: 100 });

    // set z-index levels for the swipe panels
    gsap.set(swipePanels, {
      zIndex: (i) => i,
    });

    // create an observer and disable it to start
    let intentObserver = ScrollTrigger.observe({
      type: "wheel,touch",
      onUp: () => !animating && gotoPanel(currentIndex + 1, true),
      onDown: () => !animating && gotoPanel(currentIndex - 1, false),
      wheelSpeed: -1, // to match mobile behavior, invert the wheel speed
      tolerance: 10,
      preventDefault: true,
      onPress: (self) => {
        // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
        ScrollTrigger.isTouch && self.event.preventDefault();
      },
    });
    intentObserver.disable();

    let preventScroll = ScrollTrigger.observe({
      preventDefault: true,
      type: "wheel,scroll",
      allowClicks: true,
      onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
      onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
    });
    preventScroll.disable();

    // handle the panel swipe animations
    function gotoPanel(index, isScrollingDown) {
      animating = true;
      // return to normal scroll if we're at the end or back up to the start
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
        intentObserver.disable();
        preventScroll.disable();
        animating = false;
        // now make it go 1px beyond in the correct direction so that it doesn't trigger onEnter/onEnterBack.
        preventScroll.scrollY(
          preventScroll.scrollY() + (index === swipePanels.length ? 1 : -1)
        );
        return;
      }

      //   target the second panel, last panel?
      let target = isScrollingDown
        ? swipePanels[index]
        : swipePanels[currentIndex];

      gsap.to(target, {
        yPercent: isScrollingDown ? 0 : 100,
        duration: 0.8,
        onComplete: () => {
          animating = false;
        },
      });
      currentIndex = index;
    }

    // pin swipe section and initiate observer
    ScrollTrigger.create({
      trigger: ".swipe-section",
      pin: true,
      anticipatePin: true,
      start: "top top",
      end: "+=40%",
      scrub: true,
      onEnter: (self) => {
        if (preventScroll.isEnabled === false) {
          self.scroll(self.start);
          preventScroll.enable();
          intentObserver.enable();
          gotoPanel(currentIndex + 1, true);
        }
      },
      onEnterBack: (self) => {
        if (preventScroll.isEnabled === false) {
          self.scroll(self.start);
          preventScroll.enable();
          intentObserver.enable();
          gotoPanel(currentIndex - 1, false);
        }
      },
    });
  }, []);

  return (
    <div className="swipe-section">
      <section
        className="h-dvh px-10 my-10 feature-image panel"
        style={{ backgroundImage: `url(${H3})` }}
      >
        <div className="h-52 w-1/3 border-t-2 border-white-500 pt-8 absolute top-32 ">
          <h2 className="text-8xl font-thin text-white">01/04</h2>
        </div>

        <div className="absolute bottom-0 right-0 border-white-500 pt-24 w-screen pb-24 bg-news flex justify-end">
          <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin text-white w-1/3 pr-10">
            The Robotics program at Caritas Don Bosco School engages students in
            hands-on learning, where they build and program robots. This subject
            nurtures critical thinking, problem-solving, and teamwork, preparing
            students for future careers in technology and engineering.
          </h2>
        </div>
      </section>
      <div
        className="h-dvh px-10 my-10 feature-image panel x-100"
        style={{ backgroundImage: `url(${H4})` }}
      >
        <div className="h-52 w-1/3 border-t-2 border-white-500 pt-8 absolute top-32 ">
          <h2 className="text-8xl font-thin text-white">02/04</h2>
        </div>
        <div className="absolute bottom-0 right-0 border-white-500 pt-24 w-screen pb-24 bg-news flex justify-end">
          <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin text-white w-1/3 pr-10">
            The Learners' Japan Exchange Program fosters cultural understanding
            and global citizenship. Participants immerse themselves in Japan's
            rich tradition and innovation, enhancing intercultural communication
            skills, broadening perspectives, and appreciating diversity—vital
            for personal and academic growth in today’s interconnected world.
          </h2>
        </div>
      </div>
      <div
        className="h-dvh px-10 my-10 feature-image panel x-100"
        style={{ backgroundImage: `url(${H5})` }}
      >
        <div className="h-52 w-1/3 border-t-2 border-white-500 pt-8 absolute top-32 ">
          <h2 className="text-8xl font-thin text-white">03/04</h2>
        </div>
        <div className="absolute bottom-0 right-0 border-white-500 pt-24 w-screen pb-24 bg-news flex justify-end">
          <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin text-white w-1/3 pr-10">
            The Salesian Youth Movement aims to shape young people into Good
            Christians and Upright Citizens. It brings together youth from
            various backgrounds, schools, and groups, all united by the values
            of Salesian Youth Spirituality.
          </h2>
        </div>
      </div>
      <div
        className="h-dvh px-10 my-10 feature-image panel x-100"
        style={{ backgroundImage: `url(${H6})` }}
      >
        <div className="h-52 w-1/3 border-t-2 border-white-500 pt-8 absolute top-32 ">
          <h2 className="text-8xl font-thin text-white">04/04</h2>
        </div>
        <div className="absolute bottom-0 right-0 border-white-500 pt-24 w-screen pb-24 bg-news flex justify-end">
          <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin text-white w-1/3 pr-10">
            The sports program at Caritas Don Bosco School promotes physical
            fitness, teamwork, and discipline. Through a variety of athletic
            activities, students develop essential life skills while fostering a
            spirit of sportsmanship and camaraderie, all in line with the
            school's holistic approach to education.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;

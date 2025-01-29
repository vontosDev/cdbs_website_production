import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AB4 from "../../../assets/gallery/AB4.jpg";
import gsap from "gsap";
import { useEffect } from "react";

function Feature2() {
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

  return (
<div className="flex flex-col md:flex-row px-5 md:px-10 lg:px-20 mb-10">
  {/* Image Section */}
  <div className="closed md:w-1/2 mb-10 md:mb-0">
    <div className="reveal opacity-0">
      <img src={AB4} className="w-full lg-image about-us-image" />
    </div>
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 feature-container mt-10 md:mt-0 lg:mt-28">
    <div>
      <h2 className="text-header mb-10 text-center md:text-left">Values That Guide Us</h2>
      <div className="flex flex-col gap-10">
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">S</span>elf-Sacrifice: Demonstrates
          selflessness, sensitivity to others' needs, and advocates for the
          marginalized without expecting anything in return.
        </h2>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">O</span>bedience: Commits to school
          culture and follows established rules and norms.
        </h2>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">R</span>espect: Displays courtesy,
          embraces diversity, contributes humbly, and shows care for the
          environment.
        </h2>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">I</span>ntegrity: Upholds ethical
          standards, transparency, accountability, and honesty in all
          actions.
        </h2>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">S</span>implicity: Lives modestly,
          values practicality, shows gratitude, and adapts to challenges.
        </h2>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <span className="font-bold">E</span>xcellence: Exhibits strong
          character, resilience, and fosters creativity for meaningful
          impact.
        </h2>
      </div>
    </div>
  </div>
</div>

  );
}

export default Feature2;

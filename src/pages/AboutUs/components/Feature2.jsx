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
    <div className="flex flex-row px-20 mb-10">
      <div className="closed">
        <div className="reveal opacity-0">
          <img src={AB4} className="lg-image about-us-image" />
        </div>
      </div>
      <div className="w-1/2 feature-container mt-28">
        <div>
          <h2 className="font-thin text-6xl mb-10">Values That Guide Us</h2>
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">S</span>elf-Sacrifice: Demonstrates
              selflessness, sensitivity to others' needs, and advocates for the
              marginalized without expecting anything in return.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">O</span>bedience: Commits to school
              culture and follows established rules and norms.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">R</span>espect: Displays courtesy,
              embraces diversity, contributes humbly, and shows care for the
              environment.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">I</span>ntegrity: Upholds ethical
              standards, transparency, accountability, and honesty in all
              actions.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">S</span>implicity: Lives modestly,
              values practicality, shows gratitude, and adapts to challenges.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              <span className="font-bold">E</span>xcellence: Exhibits strong
              character, resilience, and fosters creativity for meaningful
              impact.
            </h2>
          </div>
        </div>
        {/* <div className="mt-20">
          <h2 className="font-thin text-6xl mb-10">Lorem Ipsum</h2>
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-thin leading-10">
              At Caritas Don Bosco School, we empower students to become more
              than just learners. We nurture global thinkers, who see the world
              with an open mind and a curious spirit. We cultivate
              servant-leaders, who are driven to serve their communities and
              make a positive impact.
            </h2>
            <h2 className="text-2xl font-thin leading-10">
              Our innovative approach integrates project-based learning
              throughout the K to 12 curriculum. This hands-on experience allows
              students to collaborate effectively, develop critical thinking
              skills, and bring their learning to life.
            </h2>
            <h2 className="text-2xl font-thin leading-10">
              Caritas Don Bosco School - Where education prepares you to think
              globally, lead compassionately, and collaborate effectively.
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Feature2;

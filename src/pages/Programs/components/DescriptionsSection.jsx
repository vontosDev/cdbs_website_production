import PropTypes from "prop-types";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

DescriptionsSection.propTypes = {
  title1: PropTypes.string,
  para1a: PropTypes.string,
  para1b: PropTypes.string,
  title2: PropTypes.string,
  para2a: PropTypes.string,
  para2b: PropTypes.string,
  title3: PropTypes.string,
  para3a: PropTypes.string,
  para3b: PropTypes.string,
  title4: PropTypes.string,
  para4a: PropTypes.string,
  para4b: PropTypes.string,
  image1: PropTypes.any,
  image2: PropTypes.any,
  image3: PropTypes.any,
  image4: PropTypes.any,
};

function DescriptionsSection({
  title1,
  para1a,
  para1b,
  title2,
  para2a,
  para2b,
  title3,
  para3a,
  para3b,
  title4,
  para4a,
  para4b,
  image1,
  image2,
  image3,
  image4,
}) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let revealContainers = document.querySelector(".reveal1");
    let revealContainer2 = document.querySelector(".reveal2");
    let revealContainer3 = document.querySelector(".reveal3");
    let revealContainer4 = document.querySelector(".reveal4");
    console.log(revealContainers);

    [revealContainers].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart none none none",
          // start: "top 50%",
          once: true,
          onEnter: () => container.classList.add("opacity-100"),
          onLeaveBack: () => container.classList.remove("opacity-100"),
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.fromTo(
        container,
        0.9,
        {
          yPercent: 100,
          delay: -1.5,
          ease: "power2.out",
        },
        {
          yPercent: 0,
          delay: -1.5,
          ease: "power2.out",
        }
      );
      tl.from(image, 0.9, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        yPercent: 0,
        scale: 1,
        delay: -1.5,
        ease: "power2.out",
      });
    });
    [revealContainer2].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart none none none",
          // toggleActions: "play none none none",
          // start: "top 50%",
          once: true,
          onEnter: () => container.classList.add("opacity-100"),
          onLeaveBack: () => container.classList.remove("opacity-100"),
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.fromTo(
        container,
        0.9,
        {
          yPercent: 100,
          delay: -1.5,
          ease: "power2.out",
        },
        {
          yPercent: 0,
          delay: -1.5,
          ease: "power2.out",
        }
      );
      tl.from(image, 0.9, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        yPercent: 0,
        scale: 1,
        delay: -1.5,
        ease: "power2.out",
      });
    });
    [revealContainer3].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart none none none",
          // toggleActions: "play none none none",
          // start: "top 50%",
          once: true,
          onEnter: () => container.classList.add("opacity-100"),
          onLeaveBack: () => container.classList.remove("opacity-100"),
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.fromTo(
        container,
        0.9,
        {
          yPercent: 100,
          delay: -1.5,
          ease: "power2.out",
        },
        {
          yPercent: 0,
          delay: -1.5,
          ease: "power2.out",
        }
      );
      tl.from(image, 0.9, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        yPercent: 0,
        scale: 1,
        delay: -1.5,
        ease: "power2.out",
      });
    });
    [revealContainer4].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart none none none",
          // toggleActions: "play none none none",
          // start: "top 50%",
          once: true,
          onEnter: () => container.classList.add("opacity-100"),
          onLeaveBack: () => container.classList.remove("opacity-100"),
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.fromTo(
        container,
        0.9,
        {
          yPercent: 100,
          delay: -1.5,
          ease: "power2.out",
        },
        {
          yPercent: 0,
          delay: -1.5,
          ease: "power2.out",
        }
      );
      tl.from(image, 0.9, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        yPercent: 0,
        scale: 1,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col gap-36 justify-around mt-10 mb-36">
        <div className="w-4/5 border border-black p-4 flex flex-row gap-10 overflow-hidden">
          <div className="closed">
            <div className="reveal1 opacity-0 ">
              <img src={image1} className=" programs-image" />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <h2 className="text-6xl font-thin">{title1}</h2>
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-thin leading-10">{para1a}</p>
              <p className="text-3xl font-thin leading-10">{para1b}</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 border border-black self-end">
          <div className="flex flex-row p-4 gap-10 overflow-hidden">
            <div className="closed">
              <div className="reveal2 opacity-0">
                <img src={image2} className="h-100 programs-image-2" />
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-center">
              <h2 className="text-6xl font-thin">{title2}</h2>
              <div className="flex flex-col gap-5">
                <p className="text-3xl font-thin leading-10">{para2a}</p>
                <p className="text-3xl font-thin leading-10">{para2b}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-36 justify-around mt-10 mb-64">
        <div className="w-4/5 border border-black p-4 flex flex-row gap-10 overflow-hidden">
          <div className="closed">
            <div className="reveal3 opacity-0">
              <img src={image3} className="h-100 programs-image-4" />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <h2 className="text-6xl font-thin">{title3}</h2>
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-thin leading-10">{para3a}</p>
              <p className="text-3xl font-thin leading-10">{para3b}</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 border border-black self-end">
          <div className="flex flex-row p-4 gap-10 overflow-hidden">
            <div className="closed">
              <div className="reveal4 opacity-0">
                <img src={image4} className="h-100 programs-image-3" />
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-center">
              <h2 className="text-6xl font-thin">{title4}</h2>
              <div className="flex flex-col gap-5">
                <p className="text-3xl font-thin leading-10">{para4a}</p>
                <p className="text-3xl font-thin leading-10">{para4b}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionsSection;

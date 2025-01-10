import PropTypes from "prop-types";
import { useEffect } from "react";
import gsap from "gsap";

Highlight.propTypes = {
  type: PropTypes.number,
  image: PropTypes.any,
  children: PropTypes.node.isRequired,
};

function Highlight({ type, image, children }) {
  useEffect(() => {
    let revealContainers = document.querySelector(".reveal");
    console.log(revealContainers);

    [revealContainers].forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          // pin: true,
          trigger: container,
          toggleActions: "restart none none none",
          once: true,
          start: "top 60%",
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
    <div
      className={`flex ${
        type == 1 ? "flex-row" : "flex-row-reverse"
      }  gap-40 px-20 h-highlight overflow-hidden my-20`}
    >
      <div className="flex-col gap-10 w-1/2">
        {type == 1 ? (
          <h2 className="ml-24 text-6xl font-thin">
            Vision for Holistic Development
          </h2>
        ) : null}
        {children}
      </div>
      <div className="w-1/2 h-24">
        <div className="closed">
          <div className="reveal opacity-0">
            <img src={image} className="image-highlights" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;

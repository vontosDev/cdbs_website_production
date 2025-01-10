import AB1 from "../../../assets/gallery/AB1.jpg";
import AB2 from "../../../assets/gallery/AB2.jpg";
import AB3 from "../../../assets/gallery/AB3.jpg";

function Feature1() {
  return (
    <>
      <div className="py-4 pr-4 w-100 border border-brand mr-96 mb-36 mt-12 overflow-hidden slide-container">
        <div className="flex gap-3 photobanner">
          <img src={AB1} className="object-fill h-images-carousel w-1/3" />
          <img src={AB2} className="object-fill h-images-carousel w-1/3" />
          <img src={AB3} className="object-fill h-images-carousel w-1/3" />
          <img src={AB1} className="object-fill h-images-carousel w-1/3" />
          <img src={AB2} className="object-fill h-images-carousel w-1/3" />
          <img src={AB3} className="object-fill h-images-carousel w-1/3" />
          <img src={AB1} className="object-fill h-images-carousel w-1/3" />
          <img src={AB2} className="object-fill h-images-carousel w-1/3" />
          <img src={AB3} className="object-fill h-images-carousel w-1/3" />
        </div>
      </div>
      <div className="w-1/2 feature-container">
        <div>
          <h2 className="font-thin text-6xl mb-10">
            Growth and Community in the Philippines
          </h2>
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-thin leading-10">
              The first Caritas missionaries arrived in the Philippines in 1992,
              fulfilling their founder’s dream of expanding the mission to the
              country. In 1994, Caritas Don Bosco School was established near
              Laguna Technopark to serve the growing community.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              The school started with 21 preschoolers, four Caritas sisters, and
              two lay teachers, all housed at the Santa Rosa Village
              Multi-Purpose Hall. Despite limited facilities, it flourished
              thanks to the support of parents and the local community,
              fostering a true family spirit. Enrollment steadily increased,
              reaching over 1,200 students by 2000.
            </h2>
            <h2 className="text-3xl font-thin leading-10">
              Today, the school upholds its motto "I Love, Therefore I Serve,"
              focusing on the complete formation of the young in line with the
              spirit of St. Francis de Sales and St. John Bosco.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature1;

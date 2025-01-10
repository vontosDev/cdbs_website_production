import AD2 from "../../../assets/gallery/AD2.jpg";
import AD3 from "../../../assets/gallery/AD3.jpg";

import arrowback from "../../../assets/images/arrowback.png";
import arrowforward from "../../../assets/images/arrowforward.png";

function Subhighlight() {
  return (
    <div className="px-20 py-20 h-screen mt-20 flex flex-col gap-10">
      <h2 className="text-header">Enrolling at Caritas Don Bosco School</h2>
      <div className="flex flex-col gap-5 w-1/2">
        <p className="text-3xl font-thin leading-10">
          At Caritas Don Bosco School, we invite both new and returning students
          to join our vibrant community. Our enrollment process is designed to
          be straightforward, providing families with the necessary information
          to facilitate a smooth transition.
        </p>
        <p className="text-3xl font-thin leading-10">
          New students will receive guidance through the application process,
          while returning students can look forward to continued support in
          their educational journey.
        </p>
        <p className="text-3xl font-thin leading-10">
          Together, we foster a love of learning and a commitment to developing
          responsible citizens and servant-leaders for a brighter future.
        </p>
      </div>
      <div className="flex flex-row h-images-subhighlight">
        <div className="w-1/2  mt-20 border border-r-0 border-black overflow-hidden p-4">
          <img src={AD2} className="w-full h-full scale-x-[-1]" />
        </div>
        <div className="w-1/2  mt-20 border border-black p-4">
          <img src={AD3} className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-row justify-around ">
        <div className="flex gap-5">
          <img src={arrowback} className="w-24 object-contain" />
          <div className="text-3xl font-thin leading-10">Admissions</div>
        </div>
        <div className="flex gap-5">
          <div className="text-3xl font-thin leading-10">Enrollment</div>
          <img src={arrowforward} className="w-24 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Subhighlight;

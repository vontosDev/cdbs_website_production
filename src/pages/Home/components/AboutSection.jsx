import H1 from "../../../assets/gallery/H1.jpg";
import H2 from "../../../assets/gallery/H2.jpg";

function AboutSection() {
  return (
    <div className="relative">
      <div className="h-about w-100 px-36 mt-36">
        <h2 className="text-header">PHILOSOPHY OF EDUCATION</h2>
        <p className="w-1/2 py-6 text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          Caritas Don Bosco School is a Christ-Centered Salesian Educational
          Community inspired by the Suore della carità di Gesù Charism anchored
          on Don Bosco’s Preventive System geared towards forming 21st-century
          servant-leaders contributing to societal transformation. 
        </p>
        <p className="w-1/2 py-6 text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl">VISION</p>
          Caritas Don Bosco School is a leading Salesian educational institution
          continuously forming global life-giving servant-leaders.
        </p>
        <p className="w-1/2 py-6 text-1xl sm:text-2xl lg:text-3xl font-thin leading-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl">MISSION</p>
          We, the Educative Pastoral Community, commit to collaborate and
          animate the institutional core values for the holistic formation of
          learners in pursuing and fulfilling our God-given purpose in life
          evident in our service towards the environment, marginalized youth,
          indigenous people, and family ministry.
        </p>
      </div>

      <div className="absolute bg-black right-40 top-0">
        <img src={H1} className="picture1" />
      </div>
      <div className="absolute second-picture-el">
        <img src={H2} className="picture2" />
      </div>
    </div>
  );
}

export default AboutSection;

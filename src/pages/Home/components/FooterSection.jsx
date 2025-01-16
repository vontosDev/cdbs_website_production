import { useState } from "react";
import Button from "../../../components/Button/Button";
import { NavLink } from "react-router-dom";
import email from "../../../assets/images/email1.svg";
import phone from "../../../assets/images/phone1.svg";
import home from "../../../assets/images/home1.svg";
import facebook from "../../../assets/images/facebook1.svg";
import youtube from "../../../assets/images/youtube1.svg";

function FooterSection() {
  const [showEmailPanel, setShowEmailPanel] = useState(false);
  const [showPhonePanel, setShowPhonePanel] = useState(false);
  const [showHomePanel, setShowHomePanel] = useState(false);
  const [showFacebookPanel, setShowFacebookPanel] = useState(false);
  const [showYouTubePanel, setShowYouTubePanel] = useState(false);

  const handleEmailClick = () => setShowEmailPanel(!showEmailPanel);
  const handlePhoneClick = () => setShowPhonePanel(!showPhonePanel);
  const handleHomeClick = () => setShowHomePanel(!showHomePanel);
  const handleFacebookClick = () => setShowFacebookPanel(!showFacebookPanel);
  const handleYouTubeClick = () => setShowYouTubePanel(!showYouTubePanel);

  return (
    <section className="h-footer w-full flex flex-col justify-center items-center gap-20 relative">
      <h3 className="text-8xl font-thin">
        The future of your child starts{" "}
        <a 
          href="/admissions" 
          className="underline underline-offset-8 decoration-1"
        >
          here.
        </a>
      </h3>
      
      <div className="flex flex-row gap-10">
        <NavLink to="/admissions">
          <Button text="INQUIRE NOW" btnType={3} />
        </NavLink>
        <NavLink to="/about">
          <Button text="LEARN MORE" btnType={2} />
        </NavLink>  
      </div>

      {/* Replacing footerIcons with three icons in a column */}
      <div className="absolute left-10 top-1/3 flex flex-col gap-4">
        <div className="relative">
          <img 
            src={email} 
            alt="Email Icon" 
            className="w-12 h-12 cursor-pointer" 
            onClick={handleEmailClick}
          />
          {showEmailPanel && (
            <div className="absolute left-14 top-0 w-[180px] h-[40px] bg-gray-800 text-white p-4 flex justify-center items-center">
              <p>info@caritasdonboscoschool.edu.ph</p>
            </div>
          )}
        </div>
        <div className="relative">
          <img 
            src={phone} 
            alt="Phone Icon" 
            className="w-12 h-12 cursor-pointer" 
            onClick={handlePhoneClick}
          />
          {showPhonePanel && (
            <div className="absolute left-14 top-0 w-[180px] h-[40px] bg-gray-800 text-white p-4 flex justify-center items-center">
              <p>0917 623 4841</p>
            </div>
          )}
        </div>
        <div className="relative">
          <img 
            src={home} 
            alt="Home Icon" 
            className="w-12 h-12 cursor-pointer" 
            onClick={handleHomeClick}
          />
          {showHomePanel && (
            <div className="absolute left-14 top-0 w-[180px] h-[40px] bg-gray-800 text-white p-4 flex justify-center items-center">
              <p>7354+G63, Laguna Technopark, Laguna Blvd, Biñan, 4024 Laguna</p>
            </div>
          )}
        </div>
      </div>

      {/* Facebook and YouTube icons with panels on the left */}
      <div className="absolute right-10 top-1/3 flex flex-col gap-4">
        <div className="relative">
          <img 
            src={facebook} 
            alt="Facebook Icon" 
            className="w-16 h-16 cursor-pointer" 
            onClick={handleFacebookClick}
          />
          {showFacebookPanel && (
            <div className="absolute right-16 top-0 w-[180px] h-[40px] bg-gray-800 text-white p-4 flex justify-center items-center">
                <a 
                href="https://www.facebook.com/CaritasDonBoscoSchool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white underline"
              >
                Follow us on Facebook!
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <img 
            src={youtube} 
            alt="YouTube Icon" 
            className="w-16 h-16 cursor-pointer" 
            onClick={handleYouTubeClick}
          />
          {showYouTubePanel && (
            <div className="absolute right-16 top-0 w-[180px] h-[40px] bg-gray-800 text-white p-4 flex justify-center items-center">
                <a 
                href="https://www.youtube.com/channel/UC954YgprQNYs2azg4TCf9Lw/videos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white underline"
              >
                Watch our videos on YouTube!
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-10 bg-gray-200 absolute bottom-0 right-0 left-0 flex justify-center items-center text-black">
        Copyright made by Vontos
      </div>
    </section>
  );
}

export default FooterSection;

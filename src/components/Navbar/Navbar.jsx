import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname == "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="px-10 sticky top-0 z-10 bg-brand">
      <div className="flex flex-row w-100 justify-center align-middle h-36 border-brand border-b px-5 bg-nav">
        <img
          className="p-4 hover:cursor-pointer h-full"
          src={logo}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Navbar;

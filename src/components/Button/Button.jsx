import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.number,
};

function Button({ text, btnType }) {
  return (
    <div
    className={`flex flex-row justify-center items-center text-xs sm:text-xl lg:text-2xl ${
      btnType == 1 || btnType == 3 ? "border-2 border-brand-btn" : null
    } ${
      btnType == 1 || btnType == 3 ? null : "bg-brand-btn"
    } rounded-md h-14 sm:h-14 lg:h-14 ${
      btnType == 2 || btnType != 3
        ? "text-white border-1 border-white"
        : "text-black"
    } w-71 sm:w-86 lg:w-96`}
  >
    {text}
  </div>
  



  );
}

export default Button;

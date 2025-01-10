import Button from "../../../components/Button/Button";
import footerIcons from "../../../assets/images/footer-icons.png";

function FooterSection() {
  return (
    <section className="h-footer w-full flex flex-col justify-center items-center gap-20 relative">
      <h3 className="font-thin foot-header">
        The future of your child starts{" "}
        <span className="underline underline-offset-8 decoration-1">here.</span>
      </h3>
      <div className="flex flex-row gap-10">
        <Button text="INQUIRE NOW" btnType={2} />
        <Button text="LEARN MORE" btnType={3} />
      </div>

      <div className="absolute left-10 w-8">
        <img src={footerIcons} />
      </div>
      <div className="w-full h-10 bg-gray-200 absolute bottom-0 right-0 left-0 flex justify-center items-center text-black">
        Copyright made by Vontos
      </div>
    </section>
  );
}

export default FooterSection;

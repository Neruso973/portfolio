import github from "../../../public/img/git.png";
import linkedin from "../../../public/img/linkedin.png";
import cv from "../../../public/img/logocv.svg";

function Footer() {
  return (
    <footer className="flex h-32 w-[99vw] space-x-[50%] bg-[#1B2271] text-[#18ADC2]">
      <div>
        <h1 className="mt-6 ml-24 text-2xl font-semibold text-[#18ADC2]">
          Site web designé et réalisé avec <br /> Remix par Nelson NTEPP
        </h1>
      </div>
      <div className="mt-6 mr-24 flex space-x-12">
        <a href="https://github.com/Neruso973/" target="_blank">
          <img src={github} alt="github logo" className="h-16 w-16" />
        </a>
        <a
          href="http://www.linkedin.com/in/nelson-ntepp-5a6224221"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin logo" className="h-16 w-16" />
        </a>
        <a href={cv} download="CV\ nelson\ ntepp.pdf">
          <img src={cv} alt="cv logo" className="h-16 w-16" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

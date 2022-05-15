import { Link } from "@remix-run/react";
import { useRef } from "react";
import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";

import { useOptionalUser } from "~/utils";
import github from "../../public/img/git.png";
import linkedin from "../../public/img/linkedin.png";
import mail from "../../public/img/mail.png";
import cv from "../../public/img/logocv.png";
import ArrowIcon from "~/svg/arrowIcon";
import About from "../components/pages/about";
import NameTitle from "~/svg/title/name-title";

export default function Index() {
  const scrollRef = useRef<any>();
  const user = useOptionalUser();

  const goAbout = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main className="h-screen bg-[url('/img/bg.svg')]">
        <div className="border-1 absolute top-52 left-[30rem] m-auto h-3/6 w-2/4 rounded-3xl border-solid bg-white p-8 opacity-[76%] shadow-2xl">
          <NameTitle />
          <div className="my-8 mx-auto h-1 w-3/4 rounded-sm bg-[#1B2271]"></div>
          <h2 className="p-8 text-center text-xl font-semibold text-[#1B2271]">
            Web Developer, following my professional retraining at the Wild Code
            School, I got a job as a web developer at the service center of
            GuaranÍ. With this experiences, I was able to use various
            programming languages and development tools. Always with the aim of
            perfecting my experience and learning new technologies, and to
            challenge myself continuously.
          </h2>
        </div>
        <div className="absolute top-96 mt-36">
          <a href="https://github.com/Neruso973/" target="_blank">
            <div className="h-12 w-12 cursor-pointer bg-white transition-all duration-300 ease-in-out hover:w-16">
              <img
                src={github}
                alt="github logo"
                className="mx-auto h-10 pt-1"
              />
            </div>
          </a>
          <a
            href="http://www.linkedin.com/in/nelson-ntepp-5a6224221"
            target="_blank"
          >
            <div className="h-12 w-12 cursor-pointer bg-[#DE685E] transition-all duration-300 ease-in-out hover:w-16">
              <img
                src={linkedin}
                alt="linkedin logo"
                className="mx-auto h-10 pt-1"
              />
            </div>
          </a>
          <a href="mailto:nelson.ntepp@icloud.com">
            <div className="h-12 w-12 cursor-pointer bg-[#F3B000] transition-all duration-300 ease-in-out hover:w-16">
              <img src={mail} alt="mail logo" className="mx-auto h-10 pt-1" />
            </div>
          </a>
          <a href={cv} download="CV\ nelson\ ntepp.pdf">
            <div className="h-12 w-12 cursor-pointer bg-[#4ECF52] transition-all duration-300 ease-in-out hover:w-16">
              <img src={cv} alt="cv logo" className="mx-auto h-10 pt-1" />
            </div>
          </a>
        </div>
        <div
          onClick={() => goAbout()}
          className="absolute bottom-12 left-[45%] m-auto flex h-11 w-[10%] cursor-pointer place-content-around rounded-full bg-[#0073DD] text-white transition-all duration-300 ease-in-out hover:scale-110"
        >
          <p className="ml-4 mt-2">Découvrir</p>
          <ArrowIcon />
        </div>
      </main>
      <div ref={scrollRef} className="flex bg-[#EEE]">
        <Navbar />
        <About />
      </div>
      <Footer />
    </>
  );
}

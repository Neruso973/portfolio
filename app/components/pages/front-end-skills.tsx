import { MouseEventHandler } from "react";
import FrontTitle from "~/svg/title/front-title";
import html from "../../../public/img/HTML.png";
import css from "../../../public/img/CSS.png";
import js from "../../../public/img/js.png";
import TS from "../../../public/img/TS.png";
import angular from "../../../public/img/Angular.png";
import react from "../../../public/img/React.png";
import vuejs from "../../../public/img/vuejs.png";
import remix from "../../../public/img/Remix.jpg";
import tailwind from "../../../public/img/Tailwind.png";

interface FrontProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Front({ onClick }: FrontProps) {
  return (
    <div className="border-1 m-auto mt-12 ml-16 h-[42rem] w-[42rem] rounded-3xl border-solid bg-white p-8 shadow-2xl">
      <FrontTitle />
      <div className="flex flex-col text-xl text-[#1B2271]">
        <h2 className="my-6">Languages de programation :</h2>
        <div className="mx-auto flex space-x-16">
          <img src={html} alt="html logo" className="w-20 " />
          <img src={css} alt="css logo" className="w-16" />
          <img src={js} alt="js logo" className="w-20" />
          <img src={TS} alt="TS logo" className="mt-3 h-20 w-20" />
        </div>
        <h2 className="my-6">Framework et librairies :</h2>
        <div className="mx-auto flex space-x-16">
          <img src={angular} alt="angular logo" className="h-16 w-16" />
          <img src={react} alt="react logo" className="h-16 w-24" />
          <img src={vuejs} alt="vuejs logo" className="mt-2 h-12 w-16" />
          <img src={remix} alt="remix logo" className="w-24" />
        </div>
        <h2 className="my-6">Framework CSS :</h2>
        <div className="mx-auto flex">
          <img src={tailwind} alt="tailwind logo" className="w-16" />
        </div>
      </div>
      <button
        className="absolute top-[74%] my-8 ml-36 h-11 w-[40%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-xl text-white transition-all duration-300 ease-in-out hover:scale-110"
        onClick={onClick}
      >
        Back-end
      </button>
    </div>
  );
}

export default Front;

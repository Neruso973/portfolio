import { MouseEventHandler } from "react";
import BackTitle from "~/svg/title/back-title";
import node from "../../../public/img/node.png";
import c from "../../../public/img/c.png";
import kotlin from "../../../public/img/Kotlin.png";
import nest from "../../../public/img/nest.svg";
import dotnet from "../../../public/img/NET.png";
import spring from "../../../public/img/spring.png";
import prisma from "../../../public/img/prisma.svg";
import entity from "../../../public/img/entity.png";

interface BackProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Back({ onClick }: BackProps) {
  return (
    <div className="border-1 m-auto mt-12  ml-16 h-[42rem] w-[42rem] rounded-3xl border-solid bg-white p-8 shadow-2xl">
      <BackTitle />
      <div className="flex flex-col text-xl text-[#1B2271]">
        <h2 className="my-6">Languages de programation :</h2>
        <div className="mx-auto flex space-x-32">
          <img src={node} alt="node logo" className="w-24 " />
          <img src={c} alt="c logo" className="w-16" />
          <img src={kotlin} alt="kotlin logo" className="w-20" />
        </div>
        <h2 className="my-6">Framework et librairies :</h2>
        <div className="mx-auto flex space-x-32">
          <img src={nest} alt="nest logo" className="mr-8 h-16 w-16" />
          <img src={dotnet} alt="dotnet logo" className="h-16 w-16" />
          <img src={spring} alt="spring logo" className="h-16 w-28" />
        </div>
        <h2 className="my-6">ORM:</h2>
        <div className="mx-auto flex space-x-12">
          <img src={prisma} alt="prisma logo" className="w-28" />
          <img src={entity} alt="entity logo" className="w-28" />
        </div>
      </div>
      <button
        className="absolute top-[74%] my-8 ml-36 h-11 w-[40%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-xl text-white transition-all duration-300 ease-in-out hover:scale-110"
        onClick={onClick}
      >
        Front-end
      </button>
    </div>
  );
}

export default Back;

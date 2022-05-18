import Soft from "~/svg/title/soft-title";
import english from "../../../public/img/english.png";
import japan from "../../../public/img/japan.png";

function SoftSkills() {
  return (
    <div className="border-1 mt-12 ml-16 h-[20rem] w-[32rem] rounded-3xl border-solid bg-white p-8 shadow-2xl">
      <Soft />
      <div className="flex">
        <div className="mt-2 mr-12 flex w-2/6 flex-col">
          <img src={english} alt="english flag" className="my-4" />
          <img src={japan} alt="japan flag" className="border-2" />
        </div>
        <div className="flex flex-col"></div>
        <ul className="text-2xl text-[#1B2271]">
          <li className="mt-4 flex">
            <p className="text-3xl">&rsaquo; &nbsp;</p>
            <p className="mt-2">Esprit d’équipe</p>
          </li>
          <li className="mt-8 flex">
            <p className="text-3xl">&rsaquo; &nbsp;</p>
            <p className="mt-2">Adaptabilité</p>
          </li>
          <li className="mt-8 flex">
            <p className="text-3xl">&rsaquo; &nbsp;</p>
            <p className="mt-2">Positivité</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SoftSkills;

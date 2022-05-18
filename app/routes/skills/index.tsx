import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Front from "~/components/pages/front-end-skills";
import Back from "~/components/pages/back-end-skills";
import Tools from "~/components/pages/tools";
import SoftSkills from "~/components/pages/soft-skills";

function Skills() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]">
          <h1 className="ml-12 mt-8 text-4xl font-bold text-[#1B2271]">
            Compétences
          </h1>
          <div className="mx-40 h-1 w-32 rounded-sm bg-[#1B2271]"></div>
          <div className="flex">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <>
                <Front onClick={handleClick} />
              </>
              <>
                <Back onClick={handleClick} />
              </>
            </ReactCardFlip>
            <div className="flex flex-col">
              <Tools />
              <SoftSkills />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;

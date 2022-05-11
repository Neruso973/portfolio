import Home from "~/svg/home";
import Mail from "~/svg/mail";
import Phone from "~/svg/phone";
import RoundedArrow from "~/svg/roundedArrow";
import photo from "../../public/img/photoPro.jpg";

function About() {
  const date = new Date().getFullYear();
  const anniversaire = date - 1994;

  return (
    <div className="w-[85%]">
      <h1 className="ml-12 mt-8 text-4xl font-bold text-[#1B2271]">A Propos</h1>
      <div className="mx-24 h-1 w-32 rounded-sm bg-[#1B2271]"></div>
      <div>
        <div className="mt-12 ml-[30%] flex">
          <RoundedArrow />
          <h2 className="ml-12 text-3xl font-bold text-[#1B2271]">
            Actuelement en poste chez Guarani
          </h2>
        </div>
        <div className="flex">
          <img
            src={photo}
            alt="photo pro Nelson Ntepp"
            className="mt-12 ml-24 h-96 w-72"
          />
          <div className="ml-12 flex flex-col">
            <div className="my-12 ml-24 flex space-x-60 font-semibold text-[#1B2271]">
              <ul>
                <li className="mt-12 flex">
                  <Home />
                  <p className="mt-1">&nbsp; &nbsp; Bordeaux, 33000</p>
                </li>
                <li className="mt-12 flex">
                  <Phone />
                  <p className="mt-2">&nbsp; &nbsp; (+33)6 64 76 48 64</p>
                </li>
                <li className="mt-12 flex">
                  <Mail />
                  <p>&nbsp; &nbsp; nelson.ntepp@icloud.com</p>
                </li>
              </ul>
              <ul>
                <li className="mt-12 flex">
                  <p className="text-3xl">&rsaquo; &nbsp;</p>
                  <p className="mt-2">Full-stack</p>
                </li>
                <li className="mt-12 flex">
                  <p className="text-3xl">&rsaquo; &nbsp;</p>
                  <p className="mt-2">Age: {anniversaire}</p>
                </li>
                <li className="mt-12 flex">
                  <p className="text-3xl">&rsaquo; &nbsp;</p>
                  <p className="mt-2">Niveau: Dev Junior</p>
                </li>
              </ul>
            </div>
            <div className="ml-24 w-2/3">
              <h3 className="text-justify text-2xl text-[#1B2271]">
                Apres une reconversion professionnel de développeur web à la
                Wild code school de bordeaux, ou j’ai pus me former à React,
                tailwind, Express, prisma et MySQL, j’ai obtenu un poste au
                centre de service de Guarani, ou j’ai pus me familiariser avec
                Angular, C# .net et entity framework et mettre en place des
                tests unitaires. Avec mes projets perso, j’ai pus apprendre à
                utiliser Kotlin avec spring, ainsi que nest et Remix / Vuejs. Je
                suis toujours a la recherche de nouvelles technologies a
                utiliser et d’apprendre de nouvelles choses
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/pages/card";
import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";
import { findProjects } from "~/models/projects.server";

interface Projet {
  name: string;
  screen: string;
  link: string;
  github: string;
  description: string;
  technos: JSON;
}

type LoaderData = {
  projects: Awaited<ReturnType<typeof findProjects>>;
};

export const loader: LoaderFunction = async () => {
  return json({ projects: await findProjects() });
};

function Portfolio() {
  const { projects } = useLoaderData() as LoaderData;

  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]">
          <div className="">
            <h3 className="ml-12 mt-8 text-4xl font-bold text-[#1B2271]">
              MES PROJETS
            </h3>
            <div className="mb-6 ml-60 h-1 w-16 bg-[#1B2271]"></div>
            <div className="flex flex-wrap">
              {projects &&
                projects.map((item: any) => (
                  <div key={item.name}>
                    <Card
                      key={item.name}
                      name={item.name}
                      screen={item.screen}
                      link={item.link}
                      technos={item.technos.technos}
                      github={item.github}
                      description={item.description}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;

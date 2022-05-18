import ToolsTitle from "~/svg/title/tools-title";
import apple from "../../../public/img/apple.png";
import windows from "../../../public/img/Windows.png";
import ubuntu from "../../../public/img/ubuntu.png";
import scrum from "../../../public/img/scrum.png";
import mysql from "../../../public/img/mysql.png";
import vs from "../../../public/img/vs.png";
import vscode from "../../../public/img/vscode.png";
import figma from "../../../public/img/figma.png";
import git from "../../../public/img/git.png";
import github from "../../../public/img/github.png";
import gitlab from "../../../public/img/gitlab.png";
import azure from "../../../public/img/azure.png";

function Tools() {
  return (
    <div className="border-1 ml-16 h-[24rem] w-[32rem] rounded-3xl border-solid bg-white p-8 shadow-2xl">
      <ToolsTitle />
      <div className="flex flex-col">
        <div className="my-2 mx-auto flex space-x-12">
          <img src={apple} alt="apple logo" className="w-16" />
          <img src={windows} alt="windows logo" className="w-16" />
          <img src={ubuntu} alt="ubuntu logo" className="w-16" />
          <img src={scrum} alt="scrum logo" className="ml-4 w-16" />
        </div>
        <div className="my-2 flex space-x-8">
          <img src={mysql} alt="mysql logo" className="mr-2 w-24" />
          <img src={vs} alt="vs logo" className="w-16" />
          <img src={vscode} alt="vscode logo" className="w-24" />
          <img src={figma} alt="figma logo" className="w-24" />
        </div>
        <div className="my-2 mx-auto flex space-x-12">
          <img src={git} alt="git logo" className="w-16" />
          <img src={github} alt="github logo" className="w-16" />
          <img src={gitlab} alt="gitlab logo" className="w-20" />
          <img src={azure} alt="azure logo" className="w-16" />
        </div>
      </div>
    </div>
  );
}

export default Tools;

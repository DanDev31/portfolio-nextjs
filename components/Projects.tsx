import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import projectOne from "../public/project_1.png";
import projectTwo from "../public/project_2.png";
import { projectsData } from "../utils";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex-col flex items-center justify-center mx-auto"
    >
      <div className="flex items-center justify-between gap-3 mb-[60px]">
        <h2 className="font-semibold text-[2em] font-monserrat">My Work</h2>
        <div className="block grow h-[1px] bg-main-reverse"></div>
      </div>

      <div className="space-y-20">
        {projectsData.map((project, i) => (
          <div
            className="flex flex-col md:flex-row items-center justify-between"
            key={i}
          >
            <div className="w-full lg:w-[50%]">
              <Image src={project.image} alt="Project Image" />
            </div>
            <article className="w-full lg:w-[40%]">
              <div className="relative">
                <span className="absolute -top-7 -left-5 bg-purple-800 flex items-center justify-center text-white text-xl font-bold w-[50px] h-[50px]">
                  0{i + 1}.
                </span>
                <div className="shadow-md text-center p-3">
                  <div>
                    <h3 className="font-semibold text-sm text-[18px] mb-3">
                      {project.title}
                    </h3>
                    <div className="flex justify-end items-center gap-5 mb-2">
                      <Link
                        href="/"
                        // className="hover:transform: translate-y-2 transition-all"
                      >
                        <BsGithub />
                      </Link>
                      <Link
                        href="/"
                        // className="hover:transform: translate-y-2 transition-all"
                      >
                        <BsBoxArrowUpRight />
                      </Link>
                    </div>
                    <p className="text-[15px] text-justify border-b-2 border-slate-200 py-2">
                      {project.description}
                    </p>
                    <ul className="flex items-center justify-around text-[14px] pt-2">
                      {project.stack.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

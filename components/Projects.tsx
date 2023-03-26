import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { projectsData } from "../utils";

export const Projects = () => {
  return (
    <section
      id="work"
      className="flex-col flex items-center justify-center mx-auto py-[100px]"
    >
      <div className="mb-[45px] lg:mb-[80px] w-full">
        <h2 className="font-semibold text-[24px] font-poppins line w-fit mx-auto lg:mx-0 pt-1 relative">
          My work.
        </h2>
      </div>

      <div className="space-y-20">
        {projectsData.map((project, i) => (
          <div
            className="flex flex-col md:flex-row items-center justify-between"
            key={i}
          >
            <div className="w-full lg:w-[50%] hover:-translate-y-2 hover:shadow-lg transition-all">
              <Link href={project.site} target="_blank">
                <Image src={project.image} alt="Project Image" />
              </Link>
            </div>
            <article className="w-full lg:w-[40%]">
              <div className="relative">
                <span className="absolute -top-7 -left-5 bg-purple-800 flex items-center justify-center text-white text-xl font-bold w-[50px] h-[50px]">
                  0{i + 1}.
                </span>
                <div className="shadow-xl text-center p-3">
                  <div>
                    <h3 className="font-extrabold text-[20px] mb-1 tracking-wide">
                      {project.title}
                    </h3>
                    <div className="flex justify-end items-center gap-5 mb-2">
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="hover:-translate-y-1 transition-all text-[20px]"
                      >
                        <BsGithub />
                      </Link>
                      <Link
                        href={project.site}
                        target="_blank"
                        className="hover:-translate-y-1 transition-all text-[20px]"
                      >
                        <BsBoxArrowUpRight />
                      </Link>
                    </div>
                    <p className="text-left border-b-2 border-slate-200 py-3">
                      {project.description}
                    </p>
                    <ul className="flex items-center justify-around text-[14px] py-6 font-semibold">
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

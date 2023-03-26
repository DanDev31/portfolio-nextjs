import React from "react";
import Image, { StaticImageData } from "next/image";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import next from "../public/nextjs.png";
import node from "../public/node.png";
import redux from "../public/redux.png";
import react from "../public/react.png";
import sass from "../public/sass.png";
import tailwind from "../public/tailwind.png";
import ts from "../public/typescript.png";

type Icons = {
  icon: StaticImageData;
  bg: string;
  name: string;
};

export const Skills = () => {
  const icons: Icons[] = [
    {
      icon: html,
      bg: "bg-orange-300/[0.2]",
      name: "html",
    },
    {
      icon: css,
      bg: "bg-sky-300/[0.2]",
      name: "css",
    },
    {
      icon: javascript,
      bg: "bg-amber-200/[0.2]",
      name: "javascript",
    },
    {
      icon: ts,
      bg: "bg-blue-200/[0.2]",
      name: "typescript",
    },
    {
      icon: react,
      bg: "bg-sky-400/[0.2]",
      name: "react",
    },
    {
      icon: redux,
      bg: "bg-violet-400/[0.2]",
      name: "redux",
    },
    {
      icon: next,
      bg: "bg-gray-300/[0.2]",
      name: "next js",
    },
    {
      icon: node,
      bg: "bg-green-300/[0.2]",
      name: "node js",
    },
    {
      icon: sass,
      bg: "bg-pink-300/[0.2]",
      name: "sass",
    },
    {
      icon: tailwind,
      bg: "bg-teal-200/[0.2]",
      name: "Tailwind",
    },
  ];
  return (
    <section id="skills" className="py-[80px]">
      <div className="mb-10 lg:mb-[60px] w-full">
        <h2 className="font-semibold text-[24px] font-poppins line w-fit mx-auto lg:mx-0 pt-1 relative">
          Skills & Experience.
        </h2>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row md:justify-between">
        <div className="grid grid-cols-3 gap-7 grow">
          {icons.map((icon, i) => (
            <div className="flex flex-col items-center gap-3">
              <Image
                key={i}
                src={icon.icon}
                alt="skill icon"
                className={`${icon.bg} w-[70px] rounded-full p-4 flex items-center justify-center hover:-translate-y-2 transition-all`}
              />
              <span className="uppercase text-xs">{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="grow">
          <div className="flex flex-col gap-10 max-w-[400px] mx-auto">
            <div className="flex gap-8">
              <span className="text-neutral-500 text-[18px] font-extrabold w-1/2">
                2022 - present
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-slate-400 text-sm">
                  Full Stack Web developer
                </p>
                <span className="text-slate-500 text-sm uppercase font-semibold">
                  Master
                </span>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="text-neutral-500 text-[18px] font-extrabold w-1/2">
                2019 - 2021
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-slate-400 text-sm">Personal Projects</p>
                <span className="text-slate-500 text-sm uppercase font-semibold">
                  Freelance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

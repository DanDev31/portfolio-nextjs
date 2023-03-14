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
      bg: "bg-orange-300",
      name: "html",
    },
    {
      icon: css,
      bg: "bg-sky-300",
      name: "css",
    },
    {
      icon: javascript,
      bg: "bg-amber-200",
      name: "javascript",
    },
    {
      icon: next,
      bg: "bg-gray-100",
      name: "next js",
    },
    {
      icon: node,
      bg: "bg-green-300",
      name: "node js",
    },
    {
      icon: redux,
      bg: "bg-violet-400",
      name: "redux",
    },
    {
      icon: react,
      bg: "bg-blue-500",
      name: "react",
    },
    {
      icon: sass,
      bg: "bg-pink-300",
      name: "sass",
    },
    {
      icon: ts,
      bg: "bg-blue-200",
      name: "typescript",
    },
  ];
  return (
    <section className="h-screen">
      <div className="flexitems-center justify-between gap-3 mb-[60px]">
        <h2 className="font-semibold text-[2em] font-monserrat">
          Skills & Experience
        </h2>
        <div className="block grow h-[1px] bg-main-reverse"></div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row md:justify-between">
        <div className="grid grid-cols-3 gap-7 grow">
          {icons.map((icon, i) => (
            <div className="flex flex-col items-center gap-3">
              <Image
                key={i}
                src={icon.icon}
                alt="skill icon"
                className={`${icon.bg} max-w-[80px] rounded-full p-4 flex items-center justify-center`}
              />
              <span className="uppercase text-xs">{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="grow">
          <div className="flex flex-col gap-10 max-w-[400px] mx-auto">
            <div className="flex gap-8">
              <span className="text-indigo-700 font-bold w-1/2">
                2022 - present
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-slate-400 text-xs">
                  Full Stack Web developer
                </p>
                <span className="text-slate-500 text-sm uppercase">Master</span>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="text-indigo-700 font-bold w-1/2">
                2019 - 2021
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-slate-400 text-xs">Personal Projects</p>
                <span className="text-slate-500 text-sm uppercase">
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

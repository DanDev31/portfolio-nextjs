import React from "react";
import Image from "next/image";
import photo from "../public/photo.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center mx-auto"
    >
      <div className="grid-about lg:w-[80%] md:w-[95%]">
        <div className="">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-semibold text-[2em] font-monserrat">
              About Me
            </h2>
            <div className="block grow h-[1px] bg-main-reverse"></div>
          </div>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              culpa consequatur quam, quo repellat possimus pariatur, quis
              laboriosam nobis quidem ullam maiores quod optio porro nulla
              corporis unde iusto eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              culpa consequatur quam, quo repellat possimus pariatur, quis
              laboriosam nobis quidem ullam maiores quod optio porro nulla
              corporis unde iusto eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              culpa consequatur quam, quo repellat possimus pariatur, quis
              laboriosam nobis quidem ullam maiores quod optio porro nulla
              corporis unde iusto eveniet.
            </p>
          </article>
        </div>

        <figure className="relative max-w-[280px] h-auto">
          <div className="border-4 border-purple-500 absolute -right-5 top-5 w-full h-full z-10"></div>
          <Image
            src={photo}
            alt="photo"
            className="z-20 relative grayscale hover:grayscale-0 transition-all"
          />
        </figure>
      </div>
    </section>
  );
};

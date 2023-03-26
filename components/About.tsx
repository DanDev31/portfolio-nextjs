"use client";
import Image from "next/image";
import photo from "../public/photo.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center mx-auto py-[100px]"
    >
      <div className="grid-about lg:w-[80%] md:w-[95%]">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-semibold text-[24px] font-poppins">About Me</h2>
            <div className="block grow h-[1px] bg-main-reverse"></div>
          </div>

          <article className="tracking-wide">
            <p>
              My passion for web development began when I first discovered the
              power of creating beautiful and functional websites. Since then, I
              have been working tirelessly to hone my skills and create stunning
              digital experiences that delight and inspire users.
            </p>
            <br />
            <p>
              Over the years, I have gained a wealth of experience in web
              development through working on various projects and collaborating
              with other talented professionals. Whether it's crafting
              responsive layouts, optimizing website performance, or building
              custom functionality, I am always up for a challenge and enjoy the
              process of bringing ideas to life.
            </p>
            <br />
            <p>
              What I love most about web development is the creative freedom it
              provides. With every project, I am able to experiment with new
              design concepts, explore cutting-edge technologies, and push the
              boundaries of what's possible online.
            </p>
          </article>
        </div>

        <figure className="relative max-w-[280px] h-auto">
          <div className="border-4 border-gray-400 absolute -right-5 top-5 w-full h-full z-10"></div>
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

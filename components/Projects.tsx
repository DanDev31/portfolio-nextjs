import React from "react";

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
      <ul className="list-none grid-projects w-full mx-auto">
        {["01", "02", "03", "04", "05", "06"].map((e: any, i: any) => (
          <li className="relative" key={i}>
            <span className="absolute -top-7 -left-5 bg-purple-800 flex items-center justify-center text-white text-xl font-bold w-[50px] h-[50px]">
              {e}
            </span>
            <div className="shadow-md text-center p-3">
              <div>
                <h3 className="font-semibold text-sm">Project</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, molestiae!
                </p>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

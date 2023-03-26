import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="hidden fixed bottom-8 left-10 md:flex flex-col items-center gap-8 text-[24px]">
        <span className="h-[60px] w-[2px] bg-main-reverse" />
        <Link
          href="https://github.com/DanDev31"
          target="_blank"
          className="hover:-translate-y-1 hover:text-orange-500 transition-all"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/juan-daniel-s%C3%A1nchez-orozco-5024801b4/"
          target="_blank"
          className="hover:-translate-y-1 hover:text-blue-500 transition-all"
        >
          <BsLinkedin />
        </Link>
        <span className="h-[60px] w-[2px] bg-main-reverse" />
      </div>
      <header className="tracking-wide fade-in">
        <h5>Hi there, I am</h5>
        <h1 className="text-[64px] font-bold font-poppins leading-[1.2]">
          Daniel Sánchez
        </h1>
        <p>
          A Web Developer who is passionate about the new tech tendencies,{" "}
          <br /> creation of beautiful web projects and bring ideas to life.
        </p>
      </header>
    </section>
  );
};

import Emoji from "../components/Emoji";
import Link from "next/link";
import Projects from "../components/Projects";
import { Linkedin, GitHub, Dribbble, ArrowRight } from "react-feather";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-5xl xl:mt-36 m-auto">
      {/* <Image
        className="rounded-full animate-up"
        alt="Photo of Tomas Vera"
        width="115px"
        height="115px"
        src="/img/me.jpg"
      /> */}
      <h1 className="text-4xl font-semibold animate-up mt-3">
        Hi, I'm Tomas <Emoji symbol="👋" label="Wave" />
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-3 animate-up">
        Frontend Developer & UX/UI Designer at &nbsp;
        <a
          className="text-[#FFF] bg-[#6634F2] px-3 py-1,8 py-px rounded-md"
          rel="noopener"
          href="https://emprewebs.com"
          target="_blank"
        >
          Emprewebs
        </a>
        <br />
        Performing a Fullstack bootcamp at{" "}
        <a href="https://nucba.com.ar">
          <b> NUCBA </b>
        </a>
      </p>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
        <Link href="/about">
          <button className="transition w-full lg:w-auto hover:bg-[#FFF] hover:text-black text-sm rounded-md px-5 py-3 lg:py-2 border-2 border-white text-white">
            More about me <ArrowRight size={16} className="inline-flex" />
          </button>
        </Link>
      </div>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
        {/* My GitHub */}
        <a rel="noopener" href="https://github.com/tomasvera1" target="_blank">
          <button className="bg-[#2E2E2E] transition w-full lg:w-auto hover:bg-[#1E1E1E] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <GitHub size={16} className="inline-flex" />
              <span className="ml-2 inline-flex">Check my Github </span>
            </div>
          </button>
        </a>

        {/* My Linkedin */}
        <a
          rel="noopener"
          href="https://www.linkedin.com/in/tomasvera12/"
          target="_blank"
        >
          <button className="bg-[#006BA3] transition w-full lg:w-auto hover:bg-[#00476C] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Linkedin size={16} className="inline-flex" />
              <span className="ml-2 inline-flex">Connect on LinkedIn</span>
            </div>
          </button>
        </a>

        {/* My Dribbble */}
        <button className="bg-[#7634A2] transition w-full lg:w-auto hover:bg-[#4E226C] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
          <div className="inline-flex items-center justify-items-center align-middle">
            <Dribbble size={16} className="inline-flex" />
            <span className="ml-2 inline-flex">Check my Dribbble </span>
          </div>
        </button>
      </div>

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Tecnologies
      </h2>

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Projects
      </h2>

      <Projects />
    </div>
  );
}

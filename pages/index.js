import Emoji from "../components/Emoji";
import Link from "next/link";
import Projects from "../components/Projects";
import { Linkedin, Twitter } from "react-feather";
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
          className="text-[#6324F6] bg-[#A282ED] px-2 py-px rounded-md"
          rel="noopener"
          href="https://emprewebs.com"
          target="_blank"
        >
          Emprewebs
        </a>
        
        <br />
        Performing a Fullstack bootcamp at <a href="https://nucba.com.ar"> <b> NUCBA </b></a> 
      </p>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
        <a
          rel="noopener"
          href="https://www.linkedin.com/in/tomasvera12/"
          target="_blank"
        >
          <button className="border-2 hover:text-[#2867B2] hover:bg-transparent items-center text-white font-semibold border-[#2867B2] bg-[#215494] transition w-full lg:w-auto text-sm rounded-md px-5 py-3 lg:py-2">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Linkedin size={16} className="inline-flex" />
              <span className="ml-2 inline-flex">Connect on LinkedIn</span>
            </div>
          </button>
        </a>
        
        <Link href="/about">
          <button className="bg-[#A282ED] transition w-full lg:w-auto hover:bg-[#6324F6] text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            More about me
          </button>
        </Link>
      </div>

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Projects
      </h2>

      <Projects />
    </div>
  );
}

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
        width="100px"
        height="100px"
        src="/img/me.jpg"
      />  */}
      <h1 className="text-4xl font-semibold animate-up mt-3">
        Hi, I'm Tomas <Emoji symbol="👋" label="Wave" />
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-3 animate-up">
        UX/UI Designer at &nbsp;
        <a
          className="text-[#FFF] bg-[#F06132] px-3 py-1,8 py-px rounded-md"
          rel="noopener"
          href="https://www.encendercomunicacion.com/"
          target="_blank"
        >
          Encender Comunicacion
        </a>
        <br />
        I'm Frontend Developer and UX/UI Designer. 
        <br />
        Performing a UX/UI Design bootcamp at
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

        {/* My GitHub */}
        <a rel="noopener" href="https://github.com/tomasvera1" target="_blank">
          <button className="bg-[#2E2E2E] transition w-full lg:w-auto hover:bg-[#1E1E1E] text-sm rounded-md px-3 py-3 lg:py-2.5 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <GitHub size={16} className="inline-flex" />
            </div>
          </button>
        </a>

        {/* My Linkedin */}
        <a rel="noopener" href="https://www.linkedin.com/in/tomasvera12/" target="_blank">
          <button className="bg-[#006BA3] transition w-full lg:w-auto hover:bg-[#00476C] text-sm rounded-md px-3 py-3 lg:py-2.5 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Linkedin size={16} className="inline-flex" />
            </div>
          </button>
        </a>

        {/* My Dribbble */}
        <a rel="noopener" href="https://www.behance.net/tomasmvera" target="_blank">
          <button className="bg-[#7634A2] transition w-full lg:w-auto hover:bg-[#4E226C] text-sm rounded-md px-3 py-3 lg:py-2.5 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Dribbble size={16} className="inline-flex" />
            </div>
          </button>
        </a>
      </div>

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
          Skills <span className="text-sm mt-16 mb-3 text-gray-500 dark:text-gray-400"> (Frontend) </span>
      </h2> 

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
          <div className="bg-[#DD4B25] transition w-full lg:w-auto hover:bg-[#E96228] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="HTML5" width="20px" height="20px" src="/img/html5.svg"/> 
              <span className="ml-2 inline-flex"> HTML5 </span>
            </div>
          </div>

          <div className="bg-[#146EB0] transition w-full lg:w-auto hover:bg-[#31A4D5] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="CSS3" width="25px" height="25px" src="/img/css3.svg"/> 
              <span className="ml-2 inline-flex"> CSS3 </span>
            </div>
          </div>

          <div className="bg-[#CDB22E] transition w-full lg:w-auto hover:bg-[#F5D13A] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="Javascript" width="20px" height="20px" src="/img/javascript.svg"/> 
              <span className="ml-2 inline-flex"> Javascript </span>
            </div>
          </div>

          <div className="bg-[#24D3F3] transition w-full lg:w-auto hover:bg-[#5ED3F3] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="ReactJS" width="20px" height="20px" src="/img/react.svg"/> 
              <span className="ml-2 inline-flex"> ReactJS </span>
            </div>
          </div>

          <div className="bg-[#44A8B3] transition w-full lg:w-auto hover:bg-[#06B6D4] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="Tailwind CSS" width="20px" height="20px" src="/img/tailwind.svg"/> 
              <span className="ml-2 inline-flex"> Tailwind CSS </span>
            </div>
          </div>

          <div className="bg-[#5B4282] transition w-full lg:w-auto hover:bg-[#9181AB] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="Bootstrap" width="20px" height="20px" src="/img/bootstrap.svg"/> 
              <span className="ml-2 inline-flex"> Bootstrap </span>
            </div>
          </div> 

          <div className="bg-[#42403F] transition w-full lg:w-auto hover:bg-[#848484] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="Material Design" width="20px" height="20px" src="/img/material-design.svg"/> 
              <span className="ml-2 inline-flex"> Material Design </span>
            </div>
          </div> 

          <div className="bg-[#E84E31] transition w-full lg:w-auto hover:bg-[#EF8975] text-sm rounded-md px-3 py-3 lg:py-2 text-white">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Image className="inline-flex" alt="Git" width="20px" height="20px" src="/img/git.svg"/> 
              <span className="ml-2 inline-flex"> Git </span>
            </div>
          </div>
      </div>


      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Projects <span className="text-sm mt-16 mb-3 text-gray-500 dark:text-gray-400"> (Development) </span>
      </h2>

      <Projects />
    </div>
  );
}

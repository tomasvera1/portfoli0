import Head from "next/head";
import Image from "next/image";
const about = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <Head>
        <title>About - Tomas Vera </title>
        <meta property="title" content="About - Ingus Jansons" key="title" />
        <meta
          name="description"
          content="Frontend Developer, web page aficionado and design lover.
          Welcome to my little home, get to know more about me."
        />
      </Head>
      <div className="lg:w-1/2 lg:pr-12">
        <h1 className="font-semibold text-4xl mb-6 mt-5 lg:mt-0 animate-down">
          Tomas Vera
        </h1>
        <p>
          Frontend Developer, web page aficionado and design lover
          <br />
          <span className="opacity-50">
          Welcome to my little home.
          </span>
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Background</h2>
        <p>
          I was born in the year 2000 in the neighborhood of Caseros, in 
          <b>Buenos Aires, Argentina</b>,  was curious about computers since I was a kid when I went to 
          cyberspace with my older brother to play different games.
          <br />
          <br />
          My path in programming began when I started technical high school, but my desire and interest 
          in computers was from the first time I had my own computer. 
          At first, I was building super simple web pages with HTML and CSS until I progressed and discovered new technologies.
          I always liked to design and build things in games like houses, maps, armors, etc. 
          <br />
          <br />
          So when I knew all the tools I had at my disposal to layout applications and pages I started in the world
          of design making my first designs for web pages.
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Design</h2>
        <p>
          I have a very perfectionist eye on all things UX/UI.
          <br />
          <br />
          If I see something that is misaligned, ignores accessibility, doesn't
          follow Brand Guidelines or impedes an otherwise great User Experience,
          I will always go out of my way to educate on the matter.
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Learning</h2>
        <p>
          I am currently learning and developing with <b>React.js</b> and <b>NextJS</b>; This has also 
          sparked my interest in mobile development, so I have worked on two React Native 
          projects as well. 
          <br />
          <br />
          In React and Next projects I have been working with atomic design and styled-components 
          for good development.
        </p>
      </div>
      <div className="lg:w-1/2">
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto lg:w-1/2 lg:h-1/2">
            <Image
              src="/img/me.jpg"
              alt="Tomas Vera"
              className="rounded-full"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

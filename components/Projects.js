const Projects = () => {
  const projects = [
    {
      name: "Pokedex",
      lang: "HTML, CSS, JS",
      desc: "Use of Pokemon API to fetch data of different pokemon by searching by name.",
      link: "https://pokedex-three-hazel.vercel.app/",
      img: "/img/pokebola.svg",
    },
     {
       name: "Sportpals Web",
       lang: "HTML, CSS, JS",
       desc: "Singe plage for Sportpals App",
       link: "https://sport-singeplage.vercel.app/",
       img: "/img/sportpals.svg",
     },
     {
      name: "Spicy VPN",
      lang: "HTML, CSS, SASS, JS",
      desc: "Website development for final project in Coderhouse",
      link: "https://spicy-vpn.vercel.app/",
      img: "/img/spicy.png",
    },
     {
       name: "Barbers",
       lang: "HTML, CSS, JS",
       desc: "Single Page for leading barbershop in Argentina",
       link: "https://barbers.vercel.app/",
       img: "/img/barbers.png",
     },
    // {
    //   name: "Illumi Media",
    //   lang: "WooCommerce",
    //   desc: "EC2-hosted eCommerce for Content Creators",
    //   link: "https://illumimedia.co",
    //   img: "/img/IllumiMedia.svg",
    // },
    // {
    //   name: "PrettyRad Shirts",
    //   lang: "Shopify",
    //   desc: "eCommerce specialising in T-Shirt Designs",
    //   link: "https://www.instagram.com/prettyradshirts/",
    //   img: "/img/PrettyRadShirts.svg",
    // },
  ];

  const getColour = (lang) => {
    switch (lang) {
      case "React.js":
        return { text: "text-yellow-300", bg: "bg-yellow-300" };
      case "WooCommerce":
        return { text: "text-yellow-300", bg: "bg-pink-400" };
      case "Shopify":
        return "bg-green-400";
      case "Next.js":
        return "bg-gray-600";
      case "TypeScript":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className='grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4'>
      {projects.map((p) => {
        return (
          <a href={p.link} target='_blank' rel='noopener'>
            <div className='flex flex-col justify-center items-center p-4 bg-gray-100 dark:bg-[#20242b] text-center h-64 rounded-lg hover:bg-gray-200 dark:hover:bg-[#393e46] border border-gray-300 dark:border-[#393e46] cursor-pointer transition'>
              <img className='w-16 mb-2' src={p.img} alt={p.name} />
              <h3 className='text-lg font-semibold mb-1'>{p.name}</h3>
              <p className='w-64'>{p.desc}</p>

              <p className='underline mt-2'>
                {p.link.replace("https://", "").replace("www.", "")}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;

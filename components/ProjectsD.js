const Projects = () => {
  const projects = [
    {
      name: "Interbanking",
      lang: "UX Research, UX Writing, UI Design",
      desc: "UX Research, UX Writing and UI Design of the onboarding and web application",
      link: "https://www.interbanking.com.ar/",
      img: "/img/interbanking.svg",
    },
    {
      name: "KIA Argentina",
      lang: "UI Design",
      desc: "Web redesign and design of new implementations on the web (UI)",
      link: "http://www.kia.com.ar",
      img: "/img/kia.svg",
    },

     {
       name: "Cardif Ecosistemas",
       lang: "UX Study, UX Research, UX Writing",
       desc: "UX and UX Writing studies in the various ecosystems provided by Cardif to its partners",
       link: "https://bnpparibascardif.com.ar/",
       img: "/img/cardif2.png",
     },

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
    <div className='grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-3 grid-rows-1 gap-5'>
      {projects.map((p) => {
        return (
          <a href={p.link} target='_blank' rel='noopener'>
            <div className='flex flex-col justify-center items-center p-4 bg-gray-100 dark:bg-[#20242b] text-center h-64 rounded-lg hover:bg-gray-200 dark:hover:bg-[#393e46] border border-gray-300 dark:border-[#393e46] cursor-pointer transition'>
              <img className='w-24 mb-2' src={p.img} alt={p.name} />
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

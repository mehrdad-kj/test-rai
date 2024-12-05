import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Git from "../assets/Git.png";
import Next from "../assets/next.png";
import Redux from "../assets/redux.png";

type Image = {
  image: string;
  alt: string;
};

const Services = () => {
  const images: Image[] = [
    {
      image: HTML,
      alt: "HTML",
    },
    {
      image: CSS,
      alt: "CSS",
    },
    {
      image: JavaScript,
      alt: "JavaScript",
    },
    {
      image: React,
      alt: "React",
    },
    {
      image: Tailwind,
      alt: "Tailwind",
    },
    {
      image: Git,
      alt: "Git",
    },
    {
      image: Next,
      alt: "Next",
    },
    {
      image: Redux,
      alt: "Redux",
    },
  ];

  return (
    <div id="SERVICES" className="w-full h-[70%] bg-sky-950 text-[#C3CEDA] pt-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-10">
        <div>
          <p className="text-4xl font-bold inline-block border-b-4 border-[#ffff2e] ">
            Services
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="max-w-[1000px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {images.map((image) => (
            <div
              key={image.alt}
              className="w-48 bg-sky-900 flex flex-col ga items-center justify-center
               hover:scale-110 transition-all ease-in-out duration-500 rounded-md"
            >
              <img
                className="w-auto h-20 mx-auto my-1 object-cover"
                src={image.image}
                alt={image.alt}
              />
              <p className="my-4">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

const About = () => {
  return (
    <div id='ABOUT' className="w-full h-[70%] bg-sky-950 text-[#C3CEDA] pt-10">
      <div className="flex flex-col justify-center items-center w-full h-full py-10">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffff2e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" text-4xl font-bold">
            <p>Hi. I'm Mehrdad, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-xl pb-[50px]">
            <p>
              Enthusiastic and results-driven Frontend Developer with a robust
              3-year track record in designing and building interactive user
              interfaces. Proficient in leveraging cutting-edge technologies,
              including React, JavaScript, and associated frameworks, to develop
              visually appealing and highly functional admin panels, dashboards,
              and data-driven web applications. My expertise lies in creating
              feature- rich UIs that seamlessly blend responsiveness, optimal
              performance, and an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

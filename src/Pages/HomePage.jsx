import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TechStack from "../Components/TeckStack";
import FeaturesFE from "../Components/FeaturesFE";
import FeaturesBE from "../Components/FeaturesBE";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="px-5">
          <div className=" items-center justify-center max-w-[800px]">
            I’m a <span className="font-serif font-bold">Frontend Developer</span>{" "}
            with <span className="font-bold">4+ years</span> of experience
            crafting dynamic user interfaces using React.js, Redux Toolkit, and
            Tailwind CSS. I’ve contributed to large-scale applications like MyMTN
            (Ghana & Congo) and enjoy building scalable frontend systems.
          </div>
          <div className="mt-5">
            <div className="font-bold font-serif">Project Section</div>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-2">
          <TechStack />
          <FeaturesFE />
          <FeaturesBE />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

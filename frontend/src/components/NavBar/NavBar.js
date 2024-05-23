import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieLogo from "../../static/logo.lottie";

const NavBar = ({ navigate }) => {
  const navigateToSetup = () => {
    navigate("/setup");
  };

  const navigateToProjects = () => {
    navigate("/browse-projects");
  };

  const navigateToEmailProject = () => {
    navigate("/your-project");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-row py-5 px-10 w-full justify-end">
      <div className="w-[80px] h-[80px] overflow-hidden mr-10">
        <DotLottieReact
          src={lottieLogo}
          width={100}
          loop
          autoplay
        ></DotLottieReact>
      </div>
      <div className="flex flex-1 gap-10">
        <button className="hover:progress-invalid" onClick={navigateToHome}>
          Home
        </button>
        <button className="hover:progress-invalid" onClick={navigateToSetup}>
          Create new project
        </button>
        <button className="hover:progress-invalid" onClick={navigateToProjects}>
          Browse projects
        </button>
        <button
          className="hover:progress-invalid"
          onClick={navigateToEmailProject}
        >
          Email your project
        </button>
      </div>
    </div>
  );
};

export default NavBar;

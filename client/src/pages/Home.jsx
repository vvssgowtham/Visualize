import React, { useState } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Menu, MenuItem, HoveredLink } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";

const Home = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Visualize.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item=".....SERVICES...."
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pie-chart" className="text-lg">Pie Chart</HoveredLink>
              <HoveredLink href="/line-chart" className="text-lg">Line Chart</HoveredLink>
              <HoveredLink href="/bar-chart" className="text-lg">Bar Chart</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <TypewriterEffect
            words={words}
            className="text-6xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          />
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Visualize the Weather forecast with chartJS
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Home;

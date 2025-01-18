import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
const HeroFeatures = () => {
  return (
    <div className=" w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20 px-2 md:px-8">
      <Card
        title={`Modern Web Apps`}
        description={`Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance.`}
        icon={<CgWebsite className="h-4 w-4 text-zinc-700" />}
      />
      <Card
        title={` Tailored design`}
        description={`Custom designs tailored to your needs, providing you with a Figma file that is easy to navigate and comfortable to work with.`}
        icon={<MdOutlineDesignServices className="h-4 w-4 text-zinc-700" />}
      />
      <Card
        title={`Built by experts`}
        description={`We are a team of Senior Software Engineers that have built and developed web apps at scale. You can trust us.`}
        icon={<IoIosPeople className="h-4 w-4 text-zinc-700" />}
      />
    </div>
  );
};

const Card = ({ title, description, icon }: any) => {
  return (
    <div className="grid-card flex flex-row space-x-4 items-start">
      <div className="icons-container rounded-xl p-2 border-teal-500 border-2 shadow-sm bg-white">
        {icon}
      </div>
      <div className="content-container">
        <h2 className="font-bold text-sm text-zinc-700 tracking-wide mb-3">
          {title}
        </h2>
        <h4 className="text-zinc-700 text-sm leading-6 font-normal">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default HeroFeatures;

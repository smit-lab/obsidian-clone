import { ChartLine, Palette, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import publishImage from "../../public/publish-example-dark.png";

type Props = {};

const Publish = (props: Props) => {
  const arrra = [
    {
      icon: (
        <SquarePen
          className="text-accent-400 mb-1"
          strokeWidth={1.5}
          size={30}
        />
      ),
      heading: "Seamless editing",
      para: "Publish your instantly from the Obsidian app, and make it easy for readers to explore your web of ideas.",
    },
    {
      icon: (
        <Palette className="text-accent-400 mb-1" strokeWidth={1.5} size={30} />
      ),
      heading: "Customization",
      para: "Control the look and feel of your site with themes, custome domains, password protection, and more.",
    },
    {
      icon: (
        <ChartLine
          className="text-accent-400 mb-1"
          strokeWidth={1.5}
          size={30}
        />
      ),
      heading: "Optimized for performance",
      para: "Obsidian Pulish sites are fast, mobile-friendly, and optimized for SEO, no configuration required..",
    },
  ];
  return (
    <div>
      <div className="container mb-6">
        <h2 className="text-title mb-4">
          Publish
          <br className="sm:hidden" /> instantly.
        </h2>
        <p className="text-xl text-muted-foreground sm:text-2xl max-w-lg">
          Turn your notes into an online wiki, knowledge base, documentation, or
          digital garden. <br />
          <Link href={"#"} className="text-accent-400 font-medium">
            Learn more.
          </Link>
        </p>
      </div>
      <div className="container mb-10">
        <div className="flex flex-col gap-12 py-6 sm:grid sm:grid-cols-3 ">
          {arrra.map((item, i) => (
            <Box
              key={i}
              icon={item.icon}
              heading={item.heading}
              para={item.para}
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="container">
          <div className="w-[48rem] md:w-auto mt-1">
            <Image
              src={publishImage}
              alt="Publish image"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/20"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-primary pt-[8%]"></div>
        </div>
      </div>
      <span className="mx-auto text-center w-2/3 md:text-lg text-muted-foreground block mt-14">
        Explore the{" "}
        <Link href={"#"} className="hover:text-accent-400 underline">
          Obsidian Help
        </Link>
        &nbsp;site, powered by{" "}
        <Link href={"#"} className="hover:text-accent-400 underline">
          Obsidian Publish
        </Link>
        .
      </span>
    </div>
  );
};

const Box = ({
  icon,
  heading,
  para,
}: {
  icon: React.JSX.Element;
  heading: string;
  para: string;
}) => {
  return (
    <div className="w-full grid gap-1.5">
      {icon}
      <h3 className="text-xl text-foreground font-medium mb-1">{heading}</h3>
      <p className="leading-tight text-lg text-muted-foreground mt-1 lg:mt-0">
        {para}
      </p>
    </div>
  );
};

export default Publish;

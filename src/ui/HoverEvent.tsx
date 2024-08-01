"use client";
import useMousePosition from "@/hook/useMousePosition";
import * as React from "react";
import Image from "next/image";
import wiki from "../../public/home-wiki-hume.png";
import spinoza from "../../public/home-spinoza.png";
import decartes from "../../public/home-descartes.jpg";
import { cn } from "@/lib/utils";
import GraphFeature from "@/app/graph/page";

const LinksFeature = () => {
  return (
    <div className="mt-4 lg:mt-2">
      <p className="pb-2 outline-none" contentEditable>
        In{" "}
        <span className="underline text-accent-400 hover:text-accent-300">
          Meditations on First Philosophy{" "}
        </span>
        the philosopher{" "}
        <span className="underline text-accent-400 hover:text-accent-300">
          René Descartes
        </span>{" "}
        describes a series of doubts about the nature of reality, arriving at
        the famous phrase:
      </p>
      <ul className="list-disc relative ml-4 pb-2">
        <li className="text-muted-foreground">
          [[<span className="text-accent-400">I thin</span>]]
        </li>
        <div className="w-64 text-sm absolute bg-secondary top-6 left-0 p-2.5 rounded-md border border-neutral-700">
          <p className="py-1.5 px-2 cursor-default hover:bg-neutral-700 rounded-md transition-colors">
            <span className="font-bold">I thin</span>k therefore I am
          </p>
          <p className="py-1.5 px-2 cursor-default hover:bg-neutral-700 rounded-md transition-colors">
            Just <span className="font-bold">thin</span>k about it
          </p>
          <p className="py-1.5 px-2 cursor-default hover:bg-neutral-700 rounded-md transition-colors">
            <span className="font-bold">Thin</span>king, Fast and Slow{" "}
            <span className="text-xs text-muted-foreground block">Books/</span>
          </p>
          <p className="py-1.5 px-2 cursor-default hover:bg-neutral-700 rounded-md transition-colors">
            The <span className="font-bold">Thin</span>g{" "}
            <span className="text-xs text-muted-foreground block">Movies/</span>
          </p>
        </div>
      </ul>
      <p className="outline-none" contentEditable>
        He argues that doubting requires thinking, and therefore, the act of
        thinking confirms his existence.
      </p>
    </div>
  );
};

const PluginFeature = () => {
  const plugins = [
    {
      title: "Calendar",
      by: "Liam Cain",
      para: "Calendar view of your daily notes.",
      checkDefault: true,
    },
    {
      title: "Kanban",
      by: "Matthew Meyers",
      para: "Markdown-backed kanban boards.",
      checkDefault: true,
    },
    {
      title: "Dataview",
      by: "Michael Brenan",
      para: "Advanced queries for the data-obsessed.",
      checkDefault: false,
    },
    {
      title: "Outliner",
      by: "Viacheslav Slinko",
      para: "Work with your lists.",
      checkDefault: false,
    },
  ];
  return (
    <div>
      <h2 className="text-title text-xl mb-4">Community Plugin</h2>
      <hr className="border-t-neutral-700 mb-4" />
      <div>
        {plugins.map((plugin, index) => (
          <div key={index}>
            <div className="mb-4 lg:mb-3.5 grid grid-cols-4 items-center justify-between w-full">
              <div className="col-span-3">
                <span>
                  {plugin.title}{" "}
                  <span className="text-xs text-muted-foreground">
                    by {plugin.by}
                  </span>
                </span>
                <p className="text-xs sm:text-sm mt-1 text-muted-foreground">
                  {plugin.para}
                </p>
              </div>
              <div className="justify-self-end mr-1">
                <label className="switch relative inline-block w-[42px] h-[22px] lg:w-[44px] bg-neutral-600 rounded-full ">
                  <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    defaultChecked={plugin.checkDefault}
                  />
                  <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all rounded-full"></span>
                </label>
              </div>
            </div>
            {index !== plugins.length - 1 && (
              <hr className="border-t-neutral-700 mb-4 lg:mb-3.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Canvas = () => {
  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="text-[6px] w-fit max-w-fit">
          <p className="w-fit text-xs bg-green-500 text-primary rounded-sm px-px">
            Lecture 1
          </p>
          <div className="w-fit flex gap-2 mt-1 bg-green-800/20 border border-muted-foreground/30 p-2 rounded-md">
            <div className="w-[110px] py-px px-2 h-[110px] overflow-y-scroll scrollbar-hide border border-muted-foreground/30 rounded-md overflow-hidden">
              <p>Rationalists</p>
              <ul className="ml-2 list-disc flex flex-col leading-relaxed">
                <div className="w-[74px]">
                  <li>Reason and innate knowledge → acquire knowledge</li>
                  <li>
                    Fundamental truths and principles can be known independent
                    of experience
                  </li>
                  <li>A priori reasoning</li>
                  <li>Reason and deduction</li>
                </div>
              </ul>
            </div>
            <div className="py-px px-2 w-2/4 h-[110px] overflow-y-scroll scrollbar-hide border border-muted-foreground/30 rounded-md overflow-hidden">
              <p>Empiricists</p>
              <ul className="ml-2 list-disc flex flex-col leading-relaxed">
                <div className="w-full">
                  <li>Experience and sensory perception → acquire knowledge</li>
                  <li>
                    Fundamental truths and principles can be known independent
                    of experience
                  </li>
                  <li>A posteriori reasoning</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/6 ">
          <Image
            src={wiki}
            alt="Wiki"
            className="h-[170px] object-cover object-top rounded-sm"
          />
        </div>
      </div>
      <div className="-mt-3 text-[6px] w-[120px] leading-relaxed flex flex-col space-y-1 rounded-md border border-muted-foreground/20 p-2 h-[140px]">
        <p className="text-[10px] font-medium">Cogito, ergo sum</p>
        <p>
          In Meditations on First Philosophy the philosopher René Descartes
          describes a series of doubts about the nature of reality, arriving at
          the famous phrase:
        </p>
        <p>I think therefore I am</p>
        <p>
          He argues that doubting requires thinking, and therefore, the act of
          thinking confirms his existence.
        </p>
      </div>
      <div className="absolute w-[500px] h-full top-[200px] left-[160px] p-6 bg-amber-800/20 rounded-md border border-muted-foreground/20">
        <div className="flex gap-2">
          <Image
            src={decartes}
            alt="a"
            className="w-[14%] border border-muted-foreground/20 rounded-md"
          />
          <Image
            src={spinoza}
            alt="Decartes"
            className="w-[14%] border border-muted-foreground/20 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    heading: "Links",
    para: "Create connections between your notes. Link anything and everything — ideas, people, places, books, and beyond. Invent your own personal Wikipedia.",
    photo: <LinksFeature />,
  },
  {
    heading: "Graph",
    para: "Visualize the relationships between your notes. Find hidden patterns in your thinking through a visually engaging and interactive graph.",
    photo: <GraphFeature />,
  },
  {
    heading: "Canvas",
    para: "An infinite space to research, brainstorm, diagram, and lay out your ideas. Canvas is a limitless playground for your mind.",
    photo: <Canvas />,
  },
  {
    heading: "Plugins",
    para: "Build your ideal thinking space. With hundreds of plugins and our open API, it's easy to tailor Obsidian to fit your personal workflow.",
    photo: <PluginFeature />,
  },
];

const HoverEvent = () => {
  const { mousePosition, divRefs } = useMousePosition();
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          ref={(el) => {
            divRefs.current[index] = el;
          }}
          className="rounded-xl overflow-hidden w-full h-auto bg-secondary hover-gradient border border-neutral-700/60 relative"
          style={
            {
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties
          }
        >
          <div className="p-6">
            <h2 className="text-lg mb-1 font-medium md:text-2xl">
              {feature.heading}
            </h2>
            <p className="text-lg leading-tight md:text-xl text-muted-foreground">
              {feature.para}
            </p>
          </div>
          <div className="md:h-96 w-full overflow-hidden mt-auto pt-6 pl-6 sm:pl-12 relative">
            <div
              className={cn(
                "relative bg-neutral-900 border-t border-l border-neutral-800 h-96 rounded-tl-xl shadow-xl pt-8 pl-12 pr-2 text-sm md:text-base leading-5",
                { "pl-8": index == 2, "pl-0 pt-0": index == 1 }
              )}
            >
              {feature.photo}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HoverEvent;

"use client";
import Link from "next/link";
import React, { useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, History, Users } from "lucide-react";
import Image from "next/image";
import syncsettings from "../../public/sync-settings.png";
import syncdiff from "../../public/sync-diff.png";
import syncshare from "../../public/sync-share.png";

const Sync = () => {
  return (
    <div className="overflow-hidden">
      <div className="container py-10 ">
        <Tabb />
      </div>
    </div>
  );
};

const Tabb = React.memo(() => {
  const [hoveredTab, setHoveredTab] = React.useState<null | string>(null);

  const tabs = [
    {
      value: "control",
      icon: <Settings className="text-accent-400 w-6 h-6" />,
      boldText: "Fine-grained control.",
      text: "Decide which files and preferences you want to sync to whichdevices.",
    },
    {
      value: "history",
      icon: <History className="text-accent-400 w-6 h-6" />,
      boldText: "Version history.",
      text: "Easily track changes between revisions, with one year of version history for every note.",
    },
    {
      value: "collaboration",
      icon: <Users className="text-accent-400 w-6 h-6" />,
      boldText: "Collaboration.",
      text: "Work with your team on shared files without compromising your private data.",
    },
  ];
  return (
    <Tabs
      value={hoveredTab || "control"}
      orientation="vertical"
      className="w-full flex gap-4 flex-col lg:grid lg:grid-cols-2 lg:justify-between lg:gap-10 max-w-xl lg:max-w-none "
    >
      <TabsList className="flex flex-col h-full p-0 bg-transparent">
        <div className="container ml-2 lg:ml-4 mb-8 text-foreground">
          <h2 className="text-title mb-6">Sync securely.</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Access your notes on any device, secured with end-to-end
            encryption.&nbsp;
            <br className="lg:hidden" />
            <Link href={"#"} className="font-medium text-accent-400">
              Learn more.
            </Link>
          </p>
        </div>
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.value}
            className="px-0 lg:px-4 flex w-full py-4 transition-all duration-100"
            onMouseEnter={() => setHoveredTab(tab.value)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <div className="flex whitespace-normal text-start h-full w-full gap-3 items-start">
              <div className="w-fit">{tab.icon}</div>
              <p className="text-lg font-normal text-muted-foreground">
                <span className="text-foreground font-medium">
                  {tab.boldText}
                </span>{" "}
                {tab.text}
              </p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="max-w-none w-[48rem] sm:w-[57rem] h-auto md:-ml-4 lg:-ml-0 overflow-hidden">
        <TabsContent value="control">
          <Image
            src={syncsettings}
            alt="Settings"
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
        </TabsContent>
        <TabsContent
          value="history"
          className="w-full h-full object-cover object-left"
        >
          <Image src={syncdiff} alt="Settings" loading="eager" />
        </TabsContent>
        <TabsContent
          value="collaboration"
          className="w-full h-full object-cover object-left"
        >
          <Image src={syncshare} alt="Settings" loading="eager" />
        </TabsContent>
      </div>

      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
});

Tabb.displayName = "Tabb";

export default Sync;

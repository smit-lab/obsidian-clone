import Image from "next/image";
import Link from "next/link";
import LogoText from "./logo-text";
import Obsidian from "./obsidian";

const features = [
  {
    heading: "Your thoughts are yours.",
    para: "Obsidian stores notes on your device, so you can access them quickly, even offline. No one else can read them, not even us.",
  },
  {
    heading: "Your mind is unique.",
    para: (
      <span>
        With{" "}
        <Link
          href={"#"}
          className="text-accent-400 font-medium hover:text-accent-300"
        >
          hundreds of plugins
        </Link>{" "}
        and themes, you can shape Obsidian to fit your way of thinking.
      </span>
    ),
  },
  {
    heading: "Your knowledge should last.",
    para: "Obsidian uses open, non-proprietary files, so you're never locked in, and can preserve your data for the long term.",
  },
];

const FeatureHighlight = () => {
  return (
    <div className="container">
      <div className="w-full mx-auto pt-4 items-center justify-between lg:grid lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-8 ">
            {features.map((feature, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-2xl font-medium mb-1">
                  {feature.heading}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  {feature.para}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-24">
          <Link href={"#"} className="">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 mx-auto flex items-center justify-center bg-secondary rounded-[20%] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
              <Image
                src={"/obsidian-logo-gradient.svg"}
                height={24}
                width={24}
                alt={"Gradient"}
                className="w-[85%] h-auto sm:hidden"
              />
              <Obsidian />
            </div>
            <div className="flex justify-center mt-12 mb-2">
              <LogoText />
            </div>
          </Link>
          <div className="text-xl md:text-2xl text-center mt-10">
            <h3 className="">Free for personal use</h3>
            <Link
              href={"#"}
              className="text-accent-400 font-medium hover:text-accent-300"
            >
              Download now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;

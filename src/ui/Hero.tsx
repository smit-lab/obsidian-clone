import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/obsidian-hero.png";

const Hero = () => {
  return (
    <main className="pt-36 sm:pt-48 relative overflow-hidden purple-gradient">
      <div className="container mb-12">
        <div className="max-w-[42rem]">
          <h1 className="text-title my-8">Sharpen your thinking.</h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground mb-6">
            Obsidian is the private and flexible writing app that adapts to the
            way you think.
          </p>
          <div className="py-6 mt-4 flex flex-col items-start gap-6 sm:flex-row sm:items-center text-xl font-medium">
            <Link
              href={"#"}
              className="bg-accent-600 shadow-sm py-4 px-6 rounded hover:bg-accent-500 transition-colors"
            >
              Get Obsidian for macOS
            </Link>
            <Link
              href={"#"}
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              More platforms
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div dir="rtl">
          <div className="w-[50rem] max-w-none md:w-auto aspect-[1.7/1] overflow-hidden lg:mx-auto">
            <Image priority src={HeroImage} alt="Obsidian Hero image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

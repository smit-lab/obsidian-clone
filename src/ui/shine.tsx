"use client";
import Link from "next/link";
import useMousePosition from "@/hook/useMousePosition";

const Shine = () => {
  const { mousePosition, divRefs } = useMousePosition();
  const data = [
    {
      title: "Join us on Discord",
      para: "Get help, ask questions, meet other Obsidian users, and learn about their setup.",
    },
    {
      title: "Discussion forum",
      para: "Post feature requests, report bugs, and in-depth discussions about knowledge management.",
    },
    {
      title: "Developer docs",
      para: "Learn how to build your own Obsidian plugins and themes, using our open API and documentation.",
    },
  ];
  return (
    <div className="container">
      <div className="text-center">
        <p className="text-title mb-14">It&apos;s your time to shine.</p>

        <Link
          href={"#"}
          className="inline-block bg-accent-600 shadow-sm py-4 px-6 text-xl font-medium rounded hover:bg-accent-500 transition-colors"
        >
          Get Obsidian for free
        </Link>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-32">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                divRefs.current[i] = el;
              }}
              className="rounded-xl overflow-hidden w-full h-auto bg-secondary hover-gradient relative"
              style={
                {
                  "--mouse-x": `${mousePosition.x}px`,
                  "--mouse-y": `${mousePosition.y}px`,
                } as React.CSSProperties
              }
            >
              <Link href={"#"} className="text-start p-6 inline-block group">
                <h1 className="text-title text-lg md:text-2xl mb-3 group-hover:text-accent-400 transition-all">
                  {item.title}
                </h1>
                <p className="leading-tight text-lg text-muted-foreground">
                  {item.para}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shine;

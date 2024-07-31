import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  const footer_link = [
    {
      heading: "Get started",
      items: [
        {
          title: "Download",
          href: "#",
        },
        {
          title: "Pricing",
          href: "#",
        },
        {
          title: "Account",
          href: "#",
        },
      ],
    },

    {
      heading: "Obsidian",
      items: [
        {
          title: "Overview",
          href: "#",
        },
        {
          title: "Sync",
          href: "#",
        },
        {
          title: "Publish",
          href: "#",
        },
        {
          title: "Canvas",
          href: "#",
        },
        {
          title: "Mobile",
          href: "#",
        },
        {
          title: "Plugins",
          href: "#",
        },
      ],
    },
    {
      heading: "Learn",
      items: [
        {
          title: "Help",
          href: "#",
        },
        {
          title: "Developers",
          href: "#",
        },
        {
          title: "Changelog",
          href: "#",
        },
        {
          title: "About",
          href: "#",
        },
        {
          title: "Roadmap",
          href: "#",
        },
        {
          title: "Blog",
          href: "#",
        },
      ],
    },

    {
      heading: "Legal",
      items: [
        {
          title: "License overview",
          href: "#",
        },
        {
          title: "Terms of service",
          href: "#",
        },
        {
          title: "Privacy / Security",
          href: "#",
        },
      ],
    },
    {
      heading: "Community",
      items: [
        {
          title: "Join the community",
          href: "#",
        },
        {
          title: "Brand guidelines",
          href: "#",
        },
        {
          title: "Merch store",
          href: "#",
        },
        {
          title: "Discord",
          href: "#",
        },
        {
          title: "Forum / 中文论坛",
          href: "#",
        },
      ],
    },
  ];
  return (
    <footer className="container flex flex-col-reverse md:flex-row justify-between">
      <div className="text-sm mt-14 md:mt-0">
        <Link
          href={"#"}
          className="inline-block hover:text-accent-400 transition-colors mb-6"
        >
          <Logo />
        </Link>
        <div>
          <p className="text-muted-foreground/80 text-sm leading-tight mb-1.5">
            Follow us
          </p>
          <div className="font-semibold flex items-center gap-2">
            <span>Twitter</span>
            <span>Mastodon</span>
            <span>YouTube</span>
            <span>GitHub</span>
          </div>
        </div>
        <p className="text-muted-foreground/80 mt-5">&copy; 2024 Obsidian</p>
      </div>
      <div className="gap-y-10 md:w-3/5 lg:w-1/2 grid grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-4">
        <div>
          {footer_link.slice(0, 2).map((data, i) => {
            return (
              <div key={i} className="first:mb-10">
                <h3 className="text-muted-foreground/60 mb-3">
                  {data.heading}
                </h3>
                <div className="text-white font-medium flex flex-col space-y-1.5 md:space-y-1 lg:space-y-0 ">
                  {data.items.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block hover:text-accent-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {footer_link.slice(2, 4).map((data, i) => {
            return (
              <div key={i} className="first:mb-10">
                <h3 className="text-muted-foreground/60 mb-3">
                  {data.heading}
                </h3>
                <div className="text-white font-medium space-y-1.5 md:space-y-1 lg:space-y-0 flex flex-col">
                  {data.items.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block hover:text-accent-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {footer_link.slice(-1).map((data, i) => {
            return (
              <div key={i} className="first:mb-10">
                <h3 className="text-muted-foreground/60 mb-3">
                  {data.heading}
                </h3>
                <div className="text-white font-medium space-y-1.5 md:space-y-1 lg:space-y-0 flex flex-col">
                  {data.items.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block hover:text-accent-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

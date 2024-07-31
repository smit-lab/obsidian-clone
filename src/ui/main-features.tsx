import HoverEvent from "./HoverEvent";

const MainFeatures = () => {
  return (
    <div className="container">
      <div className="w-full max-w-2xl container mb-14 md:mb-24 lg:text-start">
        <h2 className="text-title mb-4">Spark brilliance.</h2>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          From personal notes to journaling, knowledge bases, and project
          management, Obsidian gives you the tools to come up with ideas and
          organize them.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <HoverEvent />
      </div>
    </div>
  );
};

export default MainFeatures;

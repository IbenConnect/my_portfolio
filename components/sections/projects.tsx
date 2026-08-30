export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-6 text-lg leading-7 text-white">
          A curated selection of projects I&apos;ve worked on.
        </p>
        <div className="mt-8 space-y-6">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <div className="p-6 bg-background/50 border-b border-border/50">
              <h3 className="text-lg font-semibold text-foreground">
                UltraPoly
              </h3>
              <p className="mt-2 text-base text-white">
                Visit: <a href="https://ultrapoly.com.ng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ultrapoly.com.ng</a>
              </p>
            </div>
            <iframe
              src="https://ultrapoly.com.ng"
              className="w-full h-96 bg-white"
              title="UltraPoly Website"
            />
          </div>
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <div className="p-6 bg-background/50 border-b border-border/50">
              <h3 className="text-lg font-semibold text-foreground">
                WebSoft Devs
              </h3>
              <p className="mt-2 text-base text-white">
                Visit: <a href="https://websoft-devs.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">websoft-devs.netlify.app</a>
              </p>
            </div>
            <iframe
              src="https://websoft-devs.netlify.app/"
              className="w-full h-96 bg-white"
              title="WebSoft Devs Website"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

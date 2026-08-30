export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Hello, I&apos;m a Full Stack Developer
        </h1>
        <p className="mt-6 text-2xl leading-8 text-white">
          I build exceptional digital experiences that live at the intersection
          of design and technology.
        </p>
      </div>
    </section>
  );
}

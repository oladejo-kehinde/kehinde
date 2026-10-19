export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Main Heading */}
        {/* <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-base-text">
          I'm <span className="text-primary inline-block">Kenny</span>
        </h1> */}

        {/* Option: Friendly & Approachable */}
        <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-base-text">
            Hi, I'm <span className="text-primary inline-block">Kenny</span>
        </h1>

        {/* Subheading / Role */}
        {/* <p className="mt-3 font-parisienne text-2xl sm:text-3xl md:text-4xl text-primary/90">
            Virtual Assistant & Automation Specialist
        </p> */}

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-text px-2">
        <span className="font-medium text-base-text block mb-1">
            Virtual Assistant &amp; Workflow Automation Specialist
        </span>
            Building smarter workflows and making everyday work simpler through automation and digital tools.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-deep-shade transition-all duration-200 hover:bg-primary-shade hover:text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 text-center"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full border border-gray-medium/50 px-8 py-3.5 font-semibold text-base-text transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 text-center"
          >
            Get in touch
          </a>
        </div>

      </div>
    </section>
  );
}
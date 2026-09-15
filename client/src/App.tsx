import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { WhatIDo } from "./sections/WhatIDo";
import { Projects } from "./sections/Projects";
import { Expertise } from "./sections/Expertise";
import { HowIWork } from "./sections/HowIWork";
import { FreelanceServices } from "./sections/FreelanceServices";
import { WhyWorkWithMe } from "./sections/WhyWorkWithMe";
import { Availability } from "./sections/Availability";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-ink dark:text-paper">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhatIDo />
        <Projects />
        <Expertise />
        <HowIWork />
        <FreelanceServices />
        <WhyWorkWithMe />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ShortVideoSection } from "@/components/ShortVideoSection";
import { SolutionSection } from "@/components/SolutionSection";

/** Section order of the page — reorder these lines to reorder the site. */
export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ShortVideoSection />
      <SolutionSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ContactFooter />
    </main>
  );
}

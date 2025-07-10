import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/hero';
import Portfolio from '@/components/Portfolio';
import ProjectsSection from '@/components/Project';
import SkillsSection from '@/components/skills';


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Portfolio />
    </main>
  );
}

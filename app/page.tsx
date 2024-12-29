import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/hero';
import ProjectsSection from '@/components/Project';
import ResumeViewer from '@/components/resume';
import SkillsSection from '@/components/skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <Experience />
      <Contact />
      <ResumeViewer />
    </main>
  );
}

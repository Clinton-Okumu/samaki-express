import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";

export const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutCta />
    </>
  );
};

export default About;

"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Element } from 'react-scroll';

import { benefitOne, benefitTwo } from "@/components/data";
import { ProjectPhases } from "@/components/ProjectPhases";
import { ProcessExpertise } from "@/components/ProcessExpertise";
import { OurTeam } from "@/components/OurTeam";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <Container>
      <Element name="Home2">
        <Hero />
      </Element>
      <Element name="Services">
        <Benefits data={benefitOne} />
      </Element>

      <Element name="Expertise">
        <SectionTitle preTitle="" title="Expertise">
        </SectionTitle>
        <ProcessExpertise />
      </Element>

      <Element name="Experience">
        <SectionTitle preTitle="" title="Experience">
        </SectionTitle>
        <Experience />
      </Element>

      <Cta />

    </Container>
  );
}

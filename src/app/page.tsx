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
export default function Home() {
  return (
    <Container>
      <Element name="Home2">
        <Hero />
      </Element>
      <Element name="What_we_do">
        <Benefits data={benefitOne} />
      </Element>

      <Element name="Why_Fostar">
        <Benefits imgPos="right" data={benefitTwo} />
      </Element>

      <Element name="Project_phases">
        <SectionTitle
          preTitle=""
          title="Project phases"
        >
          Legacy software projects come with long timelines, high price tags and require 
          a team of engineers. Fostar can help develop 4x faster at 50% the cost.
        </SectionTitle>
        <ProjectPhases />
      </Element>

      <Element name="Fostar_process">
        <SectionTitle preTitle="" title="Fostar process and expertise">
        </SectionTitle>
        <ProcessExpertise />
      </Element>

      <Element name="Team">
        <SectionTitle
          preTitle=""
          title="Our Team"
        >
        </SectionTitle>
        <OurTeam />
      </Element>

      <Cta />

    </Container>
  );
}

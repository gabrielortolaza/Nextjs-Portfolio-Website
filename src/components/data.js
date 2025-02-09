import {
  FaceSmileIcon,
  CurrencyDollarIcon,
  Cog8ToothIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import benefitOneImg from "../../public/img/services.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import frontend from "../../public/img/frontend.png";
import backend from "../../public/img/backend.png";
import mobile from "../../public/img/mobile.png";
import database from "../../public/img/database.png";
import devops from "../../public/img/devops.png";

const benefitOne = {
  title: `How I Can Help You`,
  desc: `I specialize in building modern, scalable, and high-performance web applications tailored to your business needs. Whether you need a dynamic website, a powerful backend, or a seamless mobile experience, I provide end-to-end development solutions that deliver exceptional user experiences.`,
  image: benefitOneImg,
  bullets: [
    {
      title: `Frontend Development`,
      desc: `Engaging, pixel-perfect UI/UX with React, Next, Angular, Vue, TypeScript, and modern frameworks.`,
      icon: frontend,
    },
    {
      title: `Backend Development`,
      desc: `Scalable, secure, and optimized APIs with Node.js, Express.js, Laravel, Python frameworks, and .Net frameworks.`,
      icon: backend,
    },
    {
      title: `Mobile App Development`,
      desc: `Cross-platform apps with React Native for seamless user experience.`,
      icon: mobile,
    },
    {
      title: `Database Management`,
      desc: `Efficient, optimized databases with PostgreSQL, MySQL, and MongoDB.`,
      icon: database,
    },
    {
      title: `Cloud & DevOps`,
      desc: `Scalable deployments using AWS, Firebase, and Docker for high availability.`,
      icon: devops,
    },
  ],
};

const benefitTwo = {
  title: `Why hire Fostar Lab?`,
  desc: `Because we always provide our clients high quality, reliable services by remaining a boutique firm and not overcommitting our team's time.`,
  image: benefitTwoImg,
  bullets: [
    {
      title: `Boutique, dedicated to select clients`,
      desc: `Fostar clients can rely upon our team to deliver in a timely manner because we're a boutique firm that does not overcommit our teams time`,
      icon: <FaceSmileIcon />,
    },
    {
      title: `Flexible engagement terms`,
      desc: `Whether a client needs ongoing assistance or help finishing an isolated project, Fostar is able to structure engagement terms that work best`,
      icon: <BriefcaseIcon />,
    },
    {
      title: `Rapid onboarding`,
      desc: `Fostar can easily match each our client's speeds. Clients need something fast? Fostar weaves it into our workload and gets it done in relatively short notice`,
      icon: <RocketLaunchIcon />,
    },
    {
      title: `Product, design & development leaders`,
      desc: `Fostar has years of experience building highly complex systems from scratch, including end-to-end product ideation, design, development and support`,
      icon: <SparklesIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

import {
  FaceSmileIcon,
  CurrencyDollarIcon,
  Cog8ToothIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: `How Fostar helps clients`,
  desc: `We build custom apps for corporations, and partner with startups to build their first app the right way. We rely on user testing and data to remove the guess work, and we fast-track user growth by building smart user acquisition plans.`,
  image: benefitOneImg,
  bullets: [
    {
      title: `Building a new website or MVP`,
      desc: `Want to refresh your website or build a new product? Fostar can bring it to life quickly so you can establish product/market fit without spending much time or money.`,
      icon: <RocketLaunchIcon />,
    },
    {
      title: `Need internal tools built`,
      desc: `Need to build internal tools to improve operations but don't have engineering resources or a large budget? We can help.`,
      icon: <Cog8ToothIcon />,
    },
    {
      title: `Unhappy with legacy dev time & cost`,
      desc: `Already started a project thats taking too long, costing too much or gone sideways with your offshore team? We can help right the ship.`,
      icon: <CurrencyDollarIcon />,
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

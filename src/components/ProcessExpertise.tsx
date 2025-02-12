"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Description, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ProcessExpertise = () => {
  return (
    <Container className="!p-0 expertise-section">
      <p className="items-center">
        <img src="https://skillicons.dev/icons?i=react,next,redux,angular,vue,typescript,javascript,nodejs,express,php,laravel,wordpress,python,django,flask,java,dotnet,mysql,postgresql,mongodb,graphql,docker,firebase,git,github,aws,html,css,jquery,sass" />
      </p>
      {/* <div className="md:flex flex-wrap justify-between">
        <div className="w-full xl:max-w-xl 2xl:max-w-2xl p-2">
          {processdata.map((item, index) => (
            <div key={item.title} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                      {item.description}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
        <div className="w-full xl:max-w-xl 2xl:max-w-2xl p-2">
          {expertisedata.map((item, index) => (
            <div key={item.title} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                      {item.description}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div> */}
    </Container>
  );
}

const processdata = [
  {
    title: `Discover`,
    description: `First we understand our client business challenges and only then architect and share various custom solutions to address the challenges and needs.`,
  },
  {
    title: `Product UX & UI Design`,
    description: `Next, our in-house design expertise ensures client products and software are unique, intuitive and beautiful.`,
  },
  {
    title: `Project management`,
    description:
      `We have over a decade of end-to-end project management experience so clients are comfortable relying upon us to manage all their projects. From software to medical staffing to building IVR systems, we've done them all.`,
  },
  {
    title: `Full stack development`,
    description:
      `When custom software makes sense, we uses industry-leading low code frontend, backend and native mobile apps development practices to build products faster and at a fraction of the cost of traditional, legacy development approaches.`,
  },
  {
    title: `Ongoing support`,
    description:
      `Once client solutions are deployed, our team remains ready to assist with ongoing support and consultation, as is often requested by clients.`,
  },
];

const expertisedata = [
  {
    title: `Artificial intelligence (AI)`,
    description: `To address the risk of personal and confidential data being used by ChatGPT to train public models, Fostar built a custom AI Assistant using the most advanced AI available. We also introduced the ability for users to further train their AI Assistant while ensuring user data is never utilized to train public AI models.`,
  },
  {
    title: `In-store and online commerce`,
    description: `Fostar has designed, developed and patented a hands-free, in-store/in-person and password-free online shopping experience which create the most convenient and secure checkout experience.`,
  },
  {
    title: `Healthcare`,
    description:
      `Fostar has overseen the end-to-end creation of several healthcare technology products, including a solution to streamline recurring patient laboratory testing and a platform for large partners needing to manage sensitive employee health data.`,
  },
  {
    title: `Education`,
    description:
      `Fostar helped a global educational company streamline internal operations by building their own internal platform which to this day drives the partner's global, day-to-day operations across all departments including sales, marketing and finance.`,
  },
  {
    title: `Food & Dining`,
    description:
      `Fostar has helped our restaurant clients completely overhaul their websites, including design, development, launch and on-going support.`,
  },
];

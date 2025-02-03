import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

export const ProjectPhases = () => {
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`lg:flex justify-center w-full`}
        >
          {/*  */}
          <div className="flex w-full lg:w-1/4 items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 text-white">
              01
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Build
              </h4>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Whether it&apos;s a prototype or an MVP, we can take your idea from zero to Version One, and beyond.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex w-full lg:w-1/2 items-start mt-8 space-x-3 lg:mx-[40px]">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 text-white">
              02
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Launch
              </h4>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Your early version product is ready for the world, but the hard work is about to begin: finding users. Let us help you find your first users, and fast-track product market fit.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex w-full lg:w-1/4 items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 text-white">
              03
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Grow
              </h4>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                You&apos;ve gone from zero to one. Now, let us help you go from one to one million.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </Container>
  );
};

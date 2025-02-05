import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <p className="text-xl font-medium lg:text-2xl">
            Let&apos;s talk and we&apos;ll show you the quality, 
          </p>
          <p className="text-xl font-medium lg:text-2xl">
            honest work we offer
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:gabriel.ortolaza124@gmail.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Let&apos;s work together
          </a>
        </div>
      </div>
    </Container>
  );
};

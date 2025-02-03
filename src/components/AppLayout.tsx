import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollTopButton } from "./ScrollTopButton";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout(props: Readonly<ContainerProps>) {
  return (
    <>
      <Navbar />
      <div
        className={`container p-8 mx-auto xl:px-0 ${
          props.className ? props.className : ""
        }`}>
        {props.children}
      </div>
      <Footer />
      <ScrollTopButton />
      {/* <PopupWidget /> */}
    </>
  );
}


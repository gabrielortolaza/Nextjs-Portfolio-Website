"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
// import Slider from "react-slick";
import CardGrid from "@/components/CardGrid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic_Stid from "../../public/img/team/stid.png";
import pic_Jeff from "../../public/img/team/Jeff_S.png";
import pic_Tim from "../../public/img/team/Tim_Akira.png";
import pic_Jason from "../../public/img/team/Jason_Liu.png";
import pic_Kenny from "../../public/img/team/Kenny_Roy.png";
import pic_Bayu from "../../public/img/team/Bayu_A.png";
import pic_Richard from "../../public/img/team/Richard_Glenn.png";
import pic_Scott from "../../public/img/team/scott.jpg";

const data = [
  {
    name: 'Kenny Roy',
    title: '',
    role: 'Software Engineer',
    image: pic_Kenny
  },
];

export const Experience = () => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <Container className="p-0">
      <div className="inline-block gap-10 text-center w-full p-0">
        <CardGrid />
      </div>
    </Container>
  );
};

interface ProjectProps {
  image: any;
  name: string;
  title: string;
  role: string;
}

function Project(props: Readonly<ProjectProps>) {
  return (
    <div className="text-center p-0">
      <div className="flex w-full items-center justify-center">
        <div className="flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={props.image}
            width="150"
            height="150"
            alt="Avatar"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xl font-medium">{props.name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{props.title}</div>
        <div className="text-md text-gray-600 dark:text-gray-400">{props.role}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

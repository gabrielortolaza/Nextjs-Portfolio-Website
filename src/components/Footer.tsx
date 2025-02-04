"use client";

// import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Link } from 'react-scroll';
import copy from 'copy-to-clipboard';

export function Footer() {
  const navigation = ["Home", "What we do", "Why Fostar", "Project phases", "Fostar process", "Team"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <a
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                {/* <Image
                  src="/img/brands/fostar.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8 rounded-[4px]"
                />
                <span>Fostar</span> */}
                <svg width="162" height="44" viewBox="0 0 370 100.00000000000001" className="looka-1j8o68f">
                  <defs id="SvgjsDefs3870"></defs>
                  <g id="SvgjsG3871" transform="matrix(1.070663881529055,0,0,1.070663881529055,-3.5331907579926494,-3.5331907579926494)" fill="#4f4be2">
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path d="M40,50c0-2.4,0.9-4.6,2.3-6.4c-3.5-1.7-7.3-4.7-11.7-9.4c-1.2-1.2-2.5-2.2-3.5-3.5L3.3,50l23.7,19.2c1-0.7,2.3-2.3,3.5-3.5   c4.5-4.6,8.5-7.5,12-9.1C41,54.9,40,52.5,40,50z"></path>
                      <path d="M34.2,30.6c4.6,4.5,7.4,8.5,9.1,12C45.1,41,47.4,40,50,40c2.4,0,4.6,0.9,6.4,2.3c1.7-3.5,4.7-7.3,9.4-11.7   c1.2-1.2,2.2-2.5,3.5-3.5L50,3.3L30.8,27.1C31.5,28,33.1,29.4,34.2,30.6z"></path>
                      <path d="M72.9,30.8c-1,1.2-2.2,2.4-3.5,3.5c-4,3.3-7.8,6.9-11.9,9.2c1.5,1.8,2.4,4,2.4,6.5c0,2.6-1,4.9-2.6,6.7   c4.2,2.1,8,5.8,12,9.1c1.3,1.1,2.5,2.2,3.5,3.5L96.7,50L72.9,30.8z"></path>
                      <path d="M65.8,69.4c-3.3-4-6.9-7.8-9.2-11.9c-1.8,1.5-4,2.4-6.5,2.4c-2.6,0-4.9-1-6.7-2.6c-2.1,4.2-5.7,8-9,12   c-1.1,1.3-2.2,2.5-3.5,3.5L50,96.7l19.2-23.7C68,71.9,66.8,70.8,65.8,69.4z"></path>
                    </g>
                  </g>
                  <g id="SvgjsG3872" transform="matrix(4.602356432336666,0,0,4.602356432336666,115.39764356766334,-7.551549151939138)" fill="#4f4be2">
                    <path d="M6.46 10.34 l0 2.78 l-2.46 0 l0 6.88 l-3 0 l0 -9.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 l0 0.34 l2.46 0 z M12.74 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M12.74 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M19 19.68 l0 -2.8 c1.32 0.4 2.98 0.48 4.34 0.48 c0.54 0 0.96 -0.02 1.26 -0.08 c0.28 -0.04 0.42 -0.14 0.42 -0.28 c0 -0.06 -0.02 -0.1 -0.06 -0.16 c-0.2 -0.2 -0.64 -0.3 -0.9 -0.36 s-0.6 -0.14 -1.02 -0.22 c-0.34 -0.06 -0.74 -0.14 -1.2 -0.24 c-1.56 -0.34 -2.76 -1.22 -2.76 -2.9 c0 -2.48 2.42 -3.22 4.46 -3.22 c1.28 0 2.56 0.18 3.82 0.44 l0 2.82 c-1.26 -0.38 -2.68 -0.48 -4 -0.48 c-0.52 0 -0.88 0.02 -1.1 0.08 s-0.34 0.16 -0.34 0.28 c0 0.18 0.18 0.3 0.52 0.36 c0.34 0.08 0.82 0.18 1.4 0.28 c0.52 0.1 1.02 0.2 1.5 0.32 c1.48 0.38 2.54 1.18 2.54 2.78 c0 2.68 -2.7 3.34 -4.86 3.34 c-1.36 0 -2.7 -0.18 -4.02 -0.44 z M34.839999999999996 10.34 l0 2.78 l-2.8 0 l0 1.88 c0 1.54 1.02 2.32 2.5 2.32 c0.18 0 0.34 -0.02 0.48 -0.04 s0.26 -0.04 0.4 -0.06 l0 2.78 c-0.18 0.02 -0.32 0.06 -0.42 0.08 c-0.12 0.02 -0.32 0.02 -0.58 0.02 c-3.02 0 -5.38 -2.06 -5.38 -5.1 l0 -7.4 l3 0 l0 2.74 l2.8 0 z M43.980000000000004 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M47.78 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M51.980000000000004 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z"></path>
                  </g>
                </svg>
              </a>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Fostar is a consultancy of strategists, designers, and engineers.
            </div>

          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.split(' ').join('_')} 
                  smooth={true}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700 cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://github.com/fo-star"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Github</span>
                <Github />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
            <div className="mt-5">Contact us</div>
            <div className="flex mt-2 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="mailto:gabriel.ortolaza124@gmail.com" target="_blank" rel="noopener">
                gabriel.ortolaza124@gmail.com
              </a>
            </div>
            <div className="flex mt-2 space-x-5 text-gray-400 dark:text-gray-500">
              <a rel="noopener" title="Cick to Copy" 
                onClick={() => {
                  copy('18145465332', {
                    debug: true,
                    message: 'Press #{Ctrl+C} to copy',
                  });
                }}
              >
                +1 (814) 546-5332
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="/" target="_blank" rel="noopener">
            Fostar.
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

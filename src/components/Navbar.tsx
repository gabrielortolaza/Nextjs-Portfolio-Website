"use client";

// import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { Link, Element } from 'react-scroll';

export const Navbar = () => {
  const navigation = [
    "What we do",
    "Why Fostar",
    "Project phases",
    "Fostar process",
    "Team",
  ];

  return (
    <div className="w-full">
      <Element name="Home">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <a href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                      <span>
                        <Image
                          src="/img/brands/logo.png"
                          alt="N"
                          width="100"
                          height="100"
                          className="rounded-[4px]"
                        />
                      </span>
                      {/* <span>Fostar</span> */}
                      {/* <svg width="162" height="44" viewBox="0 0 370 100.00000000000001" className="looka-1j8o68f">
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
                      </svg> */}
                    </span>
                  </a>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {navigation.map((item, index) => (
                        <Link key={index} 
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none cursor-pointer"
                          to={item.split(' ').join('_')} 
                          smooth={true}
                        >
                          {item}
                        </Link>
                      ))}
                      <a href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                          Get Started
                      </a>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link 
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer"
                    to={menu.split(' ').join('_')} 
                    smooth={true}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <a href="mailto:gabriel.ortolaza124@gmail.com" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
            </a>

            <ThemeChanger />
          </div>
        </nav>
      </Element>
    </div>
  );
}


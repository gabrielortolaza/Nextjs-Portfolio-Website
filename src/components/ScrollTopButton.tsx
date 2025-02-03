"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import { Link } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export function ScrollTopButton() {
  
  return (
    <div>
      <Disclosure>
        {() => (
          <Link to="Home" smooth={true}>
            <button className="fixed flex z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <ArrowUpwardIcon htmlColor="#fff" />
            </button>
          </Link>
        )}
      </Disclosure>
    </div>
  );
}

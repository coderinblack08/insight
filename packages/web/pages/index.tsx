import type { NextPage } from "next";
import { Button } from "@insight/ui";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import phone from "../public/phone-demo.png";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <svg
        className="absolute left-0 top-24"
        width={615 * 0.8}
        height={1231 * 0.8}
        viewBox="0 0 615 1231"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-0.499939 1231C80.3287 1231 160.366 1215.08 235.042 1184.15C309.718 1153.22 377.57 1107.88 434.724 1050.72C491.879 993.57 537.216 925.718 568.148 851.042C599.08 776.366 615 696.329 615 615.5C615 534.671 599.08 454.634 568.148 379.958C537.216 305.283 491.879 237.43 434.724 180.276C377.57 123.121 309.718 77.784 235.042 46.8523C160.366 15.9205 80.3287 7.53278e-05 -0.499892 6.82616e-05L-0.499885 615.5L-0.499939 1231Z"
          fill="url(#paint0_radial_12:22)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_12:22"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-0.499885 615.5) rotate(-90) scale(615.5)"
          >
            <stop stopColor="#2B205A" stopOpacity="0.5" />
            <stop offset="1" stopColor="#3B2F70" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <nav className="relative z-10 flex items-center justify-between py-6">
        <Image src={logo} alt="Insight Logo" />
        <ul className="flex items-center space-x-8">
          <li>
            <a className="text-gray-300">Pricing</a>
          </li>
          <li>
            <a className="text-gray-300">Contact</a>
          </li>
          <li>
            <a className="text-gray-300">Documentation</a>
          </li>
          <li>
            <Button color="outlined" size="sm" className="rounded-xl">
              Login
            </Button>
          </li>
        </ul>
      </nav>
      <div className="relative z-10 flex items-center justify-between py-8">
        <header className="max-w-[44rem]">
          <h1 className="text-5xl font-bold leading-snug text-purple-200 font-display">
            <span className="text-purple-500">
              Build Gamified & Personalized
            </span>{" "}
            <br />
            Forms and Competitions
          </h1>
          <p className="text-lg mt-6 mb-8 text-gray-400 leading-loose">
            <strong className="font-semibold text-gray-300">
              We get it, building custom realtime forms are hard and annoying.
            </strong>{" "}
            As developers or marketers, we want to devote our time to creating
            value and content, not mundane and repetitive tasks.
          </p>
          <div className="flex items-center space-x-3">
            <Button size="lg">Get Started</Button>
            <Button size="lg" color="secondary">
              Integrate with Presage
            </Button>
          </div>
        </header>
        <Image src={phone} alt="Phone demo of Insight" />
      </div>
    </div>
  );
};

export default Home;

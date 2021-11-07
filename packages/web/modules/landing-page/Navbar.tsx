import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "@insight/ui";
import { login } from "../authentication/login";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="relative z-10 flex items-center justify-between py-5">
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
          <Button
            onClick={login}
            color="outlined"
            size="sm"
            className="rounded-xl"
          >
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
};

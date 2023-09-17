import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="transition-all ease-in-out duration-200 fixed w-full top-0 left-0">
      <header className="navbar bg-dark-main relative z-10">
        <div className="navbar-start px-[2em] py-[1em]">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="transition-opacity hover:opacity-80 active:opacity-60 hidden md:flex"
            />
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={25}
              height={25}
              className="transition-opacity hover:opacity-80 active:opacity-60 md:hidden"
            />
          </Link>
        </div>

        <div className="navbar-center">
          <span className="text-xl md:text-3xl text-white-main">Portfolio</span>
        </div>

        <div className="navbar-end text-purple-main hidden md:flex">
          <div className="px-[25px] text-3xl transition-opacity hover:opacity-80 active:opacity-60">
            <Link href="/skills">Skills</Link>
          </div>
          <div className="px-[25px] transition-opacity hover:opacity-80 active:opacity-60">
            <div className="px-3 py-1.5 rounded-[25px] text-3xl text-white-main bg-purple-main">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="navbar-end md:hidden px-[2em] py-[1em]">
          <button
            onClick={toggleMenu}
            className="transition-opacity hover:opacity-80 active:opacity-60"
          >
            <Image
              src="/icons/burger.svg"
              alt="burger menu"
              width={25}
              height={25}
            />
          </button>
        </div>
      </header>
      <div
        className={`md:hidden flex-col text-center bg-dark-main pb-[1em] rounded-b-lg absolute w-full transition-all ease-in-out duration-300 ${
          isMenuOpen ? "top-[50px]" : "-top-[400px]"
        } z-0`}
      >
        <div className="py-5 text-xl transition-opacity hover:opacity-80 active:opacity-60">
          <Link href="/skills" onClick={toggleMenu}>
            Skills
          </Link>
        </div>
        <div className="py-1 transition-opacity hover:opacity-80 active:opacity-60">
          <Link
            className="px-3 py-1.5 rounded-[25px] text-xl text-white-main bg-purple-main"
            href="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

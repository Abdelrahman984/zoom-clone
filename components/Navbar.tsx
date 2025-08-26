import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4">
      <Link href="/" className="flex items-center gap-5">
        <Image
          className="max-sm:size-10"
          src="/icons/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <span className="text-white text-[26px] font-extrabold max-sm:hidden">
          Track Room
        </span>
      </Link>
      <div className="flex-between gap-5">
        {/* <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut> */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

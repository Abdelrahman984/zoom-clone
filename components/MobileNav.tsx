"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[24px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="text-white cursor-pointer sm:hidden"
            src="/icons/hamburger.svg"
            alt="Menu"
            width={36}
            height={36}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none p-4">
          <Link href="/" className="flex items-center gap-1">
            <Image
              className="max-sm:size-10"
              src="/icons/logo.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="text-white text-[26px] font-extrabold">
              Track Room
            </span>
          </Link>
          <div className="flex flex-col justify-between h-[calc(100vh-72px)] overflow-y-auto">
            <SheetClose asChild>
              <section>
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(link.route + "/");
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        key={link.route}
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="text-white font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

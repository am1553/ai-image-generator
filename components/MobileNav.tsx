"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MobileNav() {
  const path = usePathname();
  const pathname = path.split("").length < 2 ? "generate" : path.split("/")[1];

  return (
    <Sheet>
      <SheetTrigger className="bg-purple h-8 w-8 rounded-md">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-dark-blue border-0 flex flex-col">
        <SheetHeader className="">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          {routes.map((route) => (
            <Link key={route.id} href={route.path} className=" text-xl">
              <SheetClose
                className={`rounded-md flex items-center justify-start gap-4 h-12 relative w-full ${
                  pathname === route.id
                    ? "after:absolute after:top-0 after:bottom-0 after:-left-2 after:-right-2 after:rounded-md after:bg-purple after:-z-10 text-white"
                    : ""
                }`}
              >
                <Image
                  src={route.image}
                  width={28}
                  height={28}
                  alt={`${route.label}`}
                />
                {route.label}
              </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;

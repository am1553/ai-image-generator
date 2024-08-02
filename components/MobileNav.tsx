"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MobileNav() {
  const path = usePathname();
  const pathname = path.split("").length < 2 ? "generate" : path.split("")[1];
  return (
    <Sheet>
      <SheetTrigger className="bg-purple h-8 w-8 rounded-md">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-dark-blue border-0 flex flex-col">
        <SheetHeader className="">
          <SheetDescription className="">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <SheetClose
                  key={route.id}
                  className={`rounded-md h-12 relative ${
                    pathname === route.id
                      ? "after:absolute after:top-0 after:bottom-0 after:-left-2 after:-right-2 after:rounded-md after:bg-purple after:-z-10 text-white"
                      : ""
                  }`}
                >
                  <Link
                    href={route.path}
                    className=" flex items-center justify-start gap-4 text-xl"
                  >
                    <Image
                      src={route.image}
                      width={28}
                      height={28}
                      alt={`${route.label}`}
                    />
                    {route.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;

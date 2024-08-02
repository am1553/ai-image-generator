import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="header">
      <Image src={"icons/logo.svg"} height={24} width={24} alt="icon" />
      <MobileNav />
    </header>
  );
}

export default Header;

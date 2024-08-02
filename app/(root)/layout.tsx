import Header from "@/components/Header";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;

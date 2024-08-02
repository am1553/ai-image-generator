import Header from "@/components/Header";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;

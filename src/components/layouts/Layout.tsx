import React from "react";

import FooterComponent from "@/components/layouts/FooterComponent";
import HeaderComponent from "@/components/layouts/HeaderComponent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;

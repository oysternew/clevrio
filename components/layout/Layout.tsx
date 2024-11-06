import React, { ReactNode } from "react";
import HeaderSection from "../header/HeaderSection";
import FooterSection from "../footer/FooterSection";
import FooterCopyright from "../footer/FooterCopyright";
type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="Clevrio-layout">
      <HeaderSection />
      {children}
      <FooterSection />
      <FooterCopyright />
    </div>
  );
};

export default Layout;

import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  mobileMenuOpen: boolean;
};

const MainNav = ({ mobileMenuOpen }: Props) => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = (nav: string) => {
    if (isMobile) {
      setActiveNav((prevNav) => (prevNav === nav ? "" : nav));
    } else {
      return;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="main-menu" className={mobileMenuOpen ? "show" : "centrirano"}>
      {/* Original menu items as comments */}
      {/*
          <ul className="main-nav-items"> 
        <li>
          <a>Home</a>
          <ul className={`subdropdown-menu ${activeNav === "home" ? "show" : ""}`}>
            <li><Link href="/">Home 01</Link></li>
            <li><Link href="/home-2">Home 02</Link></li>
          </ul>
        </li>
        <li><Link href="/about">About</Link></li>
        <li>
          <a>Course</a>
          <ul className={`subdropdown-menu ${activeNav === "course" ? "show" : ""}`}>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/course/complete-html-css-and-javascript-course">Course Details</Link></li>
          </ul>
        </li>
        <li>
          <a>Pages</a>
          <ul className={`subdropdown-menu ${activeNav === "pages" ? "show" : ""}`}>
            <li><Link href="/instructor">Instructor</Link></li>
            <li><Link href="/instructor/liam-johnson">Instructor Details</Link></li>
            <li><Link href="/pricing">Pricing Plan</Link></li>
            <li><Link href="/faq">Faq Page</Link></li>
            <li><Link href="/sign-in">Sign In</Link></li>
            <li><Link href="/sign-up">Sign Up</Link></li>
          </ul>
        </li>
        <li>
          <a>Blog</a>
          <ul className={`subdropdown-menu ${activeNav === "blog" ? "show" : ""}`}>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog/professional-mobile-painting-and-sculpting">Blog Details</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li> </ul>*/}

      {/* New menu items */}

      <div className="navigacijatext  ">
        <Link href="/#d058d5a8-17e1-423b-8b99-133386ee45c3">Introduction</Link>
        <Link href="/#4e4a1824-cb73-4611-93f1-17e084a41a81">
          Getting Started
        </Link>

        <Link href="/#8af0f251-e8d3-40a5-b8f3-92a647f385c3">
          Trading Strategies
        </Link>

        <Link href="/#be389bf7-c539-4b93-bc1a-89e48ebe0714">
          Risk Management
        </Link>

        <Link href="/#b362070b-fc62-405b-ba79-84ffaf40f72d">
          Trading Psychology
        </Link>

        <Link href="/#77d80f18-0e1e-47e9-a656-b24c4f1226d4">
          Trading Platforms
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;

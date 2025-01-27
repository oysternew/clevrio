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

      <ul className="main-nav-items">
        <li>
          <Link href="/introduction">Introduction to Trading</Link>
          <ul
            className={`subdropdown-menu ${activeNav === "home" ? "show" : ""}`}
          >
            <li>
              <Link href="/introduction/ultimate-goal-oftrading">
                Ultimate Goal of Trading
              </Link>
            </li>
            <li>
              <Link href="/introduction/understanding-fX(forex)-Trading">
                Understanding FX (Forex) Trading
              </Link>
            </li>
            <li>
              <Link href="/introduction/key-Concepts-of-FX-Trading">
                Key Concepts of FX Trading
              </Link>
            </li>
            <li>
              <Link href="/introduction/exploring-Forex-Trading-Opportunities">
                Exploring Forex Trading Opportunities
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link href="/trading-strategies">Trading Strategies</Link>
        </li>
        <li>
          <Link href="/risk-management">Risk Management</Link>
        </li>
        <li>
          <Link href="/trading-psychology">Trading Psychology</Link>
        </li>
        <li>
          <Link href="/trading-platforms">Trading Platforms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

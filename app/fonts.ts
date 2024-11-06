import { DM_Sans, Inria_Sans, Jost } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  style: ["italic"],
  display: "swap",
  variable: "--dm_sans",
});
export const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--jost",
});
export const inria_sans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["italic"],
  display: "swap",
  variable: "--inria_sans",
});

import localFont from "next/font/local";

export const themify = localFont({
  src: "../styles/fontawesome/themify.woff",
  display: "swap",
  variable: "--themify",
});

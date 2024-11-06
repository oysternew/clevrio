import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/fontawesome/font-awesome.css";
import "../styles/fontawesome/themify-icons.css";
import "../styles/css/style.css";
import { dm_sans, inria_sans, jost, themify } from "./fonts";
import { ToastContainer } from "react-toastify";
import { Providers } from "../redux/provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`Clevrio-body ${dm_sans.variable} ${jost.variable} ${inria_sans.variable} ${themify.variable}`}
        >
          {children}
          <ToastContainer />
        </body>
      </html>
    </Providers>
  );
}

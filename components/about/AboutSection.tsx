import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";

const AboutSection = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/Image 6.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Introduction to FX and CFD Trading </h2>
              <p>
                FX (Forex) and CFD (Contract for Difference) trading are popular
                forms of financial trading that provide individuals and
                institutions with the opportunity to profit from price movements
                in various financial markets. These markets offer traders the
                potential for both short-term and long-term gains, and they are
                accessible worldwide through online trading platforms. In this
                section, we will delve into the fundamental concepts and
                features of FX and CFD trading.
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span>Currency Pairs
                </li>
                <li>
                  <span className="ti-check"></span> Exchange Rates
                </li>
                <li>
                  <span className="ti-check"></span> Liquidity
                </li>
                <li>
                  <span className="ti-check"></span> Leverage
                </li>
              </ul>
              <Link className="btn_one" href="/introduction">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

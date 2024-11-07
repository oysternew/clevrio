import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const TradingPlatforms = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Forex Trading Platforms and Tools</h2>
              <p>
                This section of a Forex and CFD trading tutorial focuses on the
                various platforms and tools that traders use to analyze the
                market, execute trades, and manage their trading accounts
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Features of Trading
                  Platforms
                </li>
                <li>
                  <span className="ti-check"></span> Analytical Tools
                </li>
                <li>
                  <span className="ti-check"></span>Demo Accounts
                </li>
                <li>
                  <span className="ti-check"></span>Mobile Trading
                </li>
              </ul>
              <Link className="btn_one" href="/trading-platforms">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/Image 4.png"
                className="img-fluid"
                alt="image"
              />
              <div className="home_ps2">
                <span className="ti-book"></span>
                <NumberCounter number={3300} durationToComplete={3} icon="+" />
                <p>Users</p>
              </div>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatforms;

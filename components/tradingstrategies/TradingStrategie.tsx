import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";

const TradingStrategies = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/Image 7.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Trading Strategies </h2>
              <p>
                In this section, we will delve into various trading strategies
                that traders employ in the FX and CFD markets. These strategies
                are crucial for making informed trading decisions, managing
                risk, and optimizing profitability
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span>Overview of Trading
                  Strategies
                </li>
                <li>
                  <span className="ti-check"></span> Common Trading Strategies
                </li>
                <li>
                  <span className="ti-check"></span> Risk Management in Trading
                  Strategies
                </li>
                <li>
                  <span className="ti-check"></span> Developing Your Strategy
                </li>
              </ul>
              <Link className="btn_one" href="/trading-strategies">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default TradingStrategies;

import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const PromoSection = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Getting Started</h2>
              <p>
                Whether you're a novice trader or looking to expand your
                financial knowledge, these fundamental steps will set you on the
                path to becoming a proficient traderion, we will delve into the
                fundamental concepts and features of FX and CFD trading.
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Setting Up Your Trading
                  Account
                </li>
                <li>
                  <span className="ti-check"></span> Choosing Your Trading
                  Platform
                </li>
                <li>
                  <span className="ti-check"></span>Learning the Basics
                </li>
                <li>
                  <span className="ti-check"></span>Placing Your First Trade
                </li>
              </ul>
              <Link className="btn_one" href="/getting-started">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/Image 7.png"
                className="img-fluid"
                alt="image"
              />
              <div className="home_ps2">
                <span className="ti-book"></span>
                <NumberCounter number={3300} durationToComplete={3} icon="+" />
                <p>Online Course</p>
              </div>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

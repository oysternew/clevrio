import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const TradingPsychology = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Psychology of Trading</h2>
              <p>
                The "Psychology of Trading" section in a Forex and CFD trading
                tutorial typically explores the mental and emotional aspects
                that significantly impact trading performance.
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Understanding Emotional
                  Influences
                </li>
                <li>
                  <span className="ti-check"></span> Impact of Stress and
                  Anxiety
                </li>
                <li>
                  <span className="ti-check"></span>The Role of Discipline
                </li>
                <li>
                  <span className="ti-check"></span>Mindset and Attitude
                </li>
              </ul>
              <Link className="btn_one" href="/trading-psychology">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/Image 1.png"
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

export default TradingPsychology;

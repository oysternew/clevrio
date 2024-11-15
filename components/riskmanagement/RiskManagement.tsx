import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";

const RiskManagement = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Risk Management</h2>
              <p>
                Effective risk management is the cornerstone of a successful
                trading career
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Understanding Risk in
                  Trading
                </li>
                <li>
                  <span className="ti-check"></span> Risk Management Strategies
                </li>
                <li>
                  <span className="ti-check"></span>Risk Assessment
                </li>
                <li>
                  <span className="ti-check"></span>Risk Management Tools
                </li>
              </ul>
              <Link className="btn_one" href="/risk-management">
                Read More <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content ">
              <h2>Understanding Risk in Trading </h2>
              <p>
                Forex trading, short for "foreign exchange trading," is the
                process of buying and selling currencies on the foreign exchange
                market with the aim of making a profit. The Forex market, also
                known as the FX market or currency market, is the largest and
                most liquid financial market globally, with a daily trading
                volume exceeding $6 trillion as of the latest data.
              </p>
              <p>
                Market risk, also known as systematic risk, stems from factors
                that affect the entire market. This includes economic events,
                geopolitical developments, and market sentiment. Management:
                Diversification, stop-loss orders, and staying informed about
                macroeconomic events can mitigate market risk
              </p>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default RiskManagement;

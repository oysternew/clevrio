import { PricingType } from "../../types";
import React from "react";
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  pricingData: PricingType[];
};
const PricingSection = ({ pricingData }: Props) => {
  return (
    <section
      id="pricing"
      className="pricing-content section-padding overflow-hidden"
    >
      <DivAnimateY className="container">
        <div className="row text-center g-4 justify-content-center">
          {pricingData.map((item: PricingType, i) => (
            <div className="col-lg-4 col-md-6 col-xs-12" key={i}>
              <div
                className={`single-pricing ${
                  item.plan === "Advance" ? "single-pricing-white" : ""
                }`}
              >
                <div className="price-head">
                  <h2>{item.plan}</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {item.plan === "Advance" && (
                  <span className="price-label">Best</span>
                )}
                <h1 className="price">${item.price}</h1>
                <h5>Monthly</h5>
                <ul>
                  {item.features.map((item, index) => (
                    <li key={index}>{item.feature}</li>
                  ))}
                </ul>
                <a className="btn_one" href="#">
                  Get start
                </a>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default PricingSection;

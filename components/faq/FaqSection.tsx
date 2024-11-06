"use client";
import { FaqType } from "../../types";
import React, { useState } from "react";
import DivAnimateX from "../utils/DivAnimateX";
type Props = {
  faqData: FaqType[];
};
const FaqSection = ({ faqData }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<number>(1);
  const toggleAccordion = (accodionId: number) => {
    setOpenAccordion(accodionId);
  };
  return (
    <section className="faq_area section-padding">
      <div className="container">
        <div className="row justify-content-center overflow-hidden">
          <DivAnimateX position={-60} className="col-lg-7 col-sm-12 col-xs-12">
            <div className="custom-accordion" id="custom-accordionExample">
              {faqData.map((item: FaqType, index) => (
                <div
                  className={`custom-accordion-item  ${
                    openAccordion === index ? "show" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="custom-accordion-button"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h2 className="custom-accordion-header" id="headingOne">
                      {item.question}
                    </h2>
                  </button>
                  <div className="custom-accordion-collapse">
                    <div className="custom-accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-5 col-sm-12 col-xs-12">
            <div className="faq_img">
              <img src="assets/img/faq.jpg" alt="faq image" />
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

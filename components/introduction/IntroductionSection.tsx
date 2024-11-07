import React from "react";
import { IntroductionTradingType } from "@/types";

type Props = {
  introductionData: IntroductionTradingType[];
};

const IntroductionSection: React.FC<Props> = ({ introductionData }) => {
  return (
    <section className="introduction-section">
      {introductionData.map(
        (data) =>
          data && ( // Add check here to ensure data is defined
            <div key={data._id}>
              {/* Provera da li je mainTitle unet */}
              {data.mainTitle && (
                <h1 className="display-4 font-bold text-center ">
                  {data.mainTitle}
                </h1>
              )}
              {/* Provera da li je subtitle unet */}
              {data.subtitle && <p className="text-center ">{data.subtitle}</p>}
              <ul>
                {data.bulletPoints &&
                  data.bulletPoints.length > 0 &&
                  data.bulletPoints.map((point, index) => (
                    <li key={index}>
                      {/* Provera da li je subheading unet */}
                      {point.subheading && (
                        <h3 className="font-semibold ">{point.subheading}</h3>
                      )}
                      {/* Provera da li je paragraph unet */}
                      {point.paragraph && <p>{point.paragraph}</p>}
                      <ul className=" ">
                        {point.listItems && point.listItems.length > 0
                          ? point.listItems.map((item, idx) => (
                              <li className="tackice" key={idx}>
                                {item}
                              </li>
                            ))
                          : null}
                      </ul>
                    </li>
                  ))}
              </ul>
              {/* Provera da li je conclusion unet */}
              {data.conclusionText && (
                <>
                  <p className="font-bold text-center ">Conclusion</p>
                  <p className="text-center">{data.conclusionText}</p>
                </>
              )}
            </div>
          )
      )}
    </section>
  );
};

export default IntroductionSection;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import DivAnimateX from "../utils/DivAnimateX";

// Definišemo tip podataka iz Sanity sheme
import { BanerPrviType } from "@/types";
import { fetchBanerPrvi } from "@/sanity/sanity.query";

const AboutSection = () => {
  const [banerPrviData, setBanerPrviData] = useState<BanerPrviType | null>(
    null
  );

  // Fetch podataka kada se komponenta mounta
  useEffect(() => {
    const getData = async () => {
      const data = await fetchBanerPrvi();
      setBanerPrviData(data[0]); // Pretpostavljamo da uzimamo samo prvi baner
    };
    getData();
  }, []);

  if (!banerPrviData) return <div>Loading...</div>; // Ako podaci nisu učitani

  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          {/* Prikaz slike */}
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src={banerPrviData.image.asset.url} // Prikazivanje slike iz Sanity
                className="img-fluid"
                alt="image"
              />
            </div>
          </DivAnimateX>

          {/* Prikaz teksta, liste i linka */}
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>{banerPrviData.title}</h2>
              <p>{banerPrviData.content}</p>
              <ul>
                {banerPrviData.list.map((item, index) => (
                  <li key={index}>
                    <span className="ti-check"></span>
                    {item || "No data available"}
                  </li>
                ))}
              </ul>
              <Link className="btn_one" href={banerPrviData.linkUrl}>
                {banerPrviData.link} <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

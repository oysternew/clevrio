"use client";
import { useEffect, useState } from "react";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";

import { IntroductionTradingType } from "@/types";
import { introductionTrading } from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";

const targetId = "b362070b-fc62-405b-ba79-84ffaf40f72d";

export default function TradingPsychology() {
  const [introductionData, setIntroductionData] =
    useState<IntroductionTradingType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await introductionTrading();
      const filteredData = data.find(
        (item: IntroductionTradingType) => item._id === targetId
      );
      setIntroductionData(filteredData || null);
    };
    fetchData();
  }, []);

  return (
    <main className="Clevrio-blog-main">
      <Layout>
        <BreadCrumbSection
          currentPage="Trading Psychology"
          headerText="Mindset and Attitude"
        />
        <div>
          {introductionData && (
            <div id={introductionData._id} className="section-offset">
              <DivAnimateY className="container">
                <IntroductionSection introductionData={[introductionData]} />
              </DivAnimateY>
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
}

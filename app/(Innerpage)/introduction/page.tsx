"use client";
import { useEffect, useState } from "react";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";

import { IntroductionTradingType } from "@/types";
import { introductionTrading } from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";

const targetId = "d058d5a8-17e1-423b-8b99-133386ee45c3";

export default function Home() {
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
          currentPage="Introduction"
          headerText="Introduction"
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

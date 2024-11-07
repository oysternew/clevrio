// RiskManagement.tsx
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { IntroductionTradingType } from "@/types";
import { introductionTrading } from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";

const targetId = "be389bf7-c539-4b93-bc1a-89e48ebe0714";
export const revalidate = 300;
export default async function RiskManagement() {
  // Fetch data directly in the component
  const data = await introductionTrading();
  const introductionData = data.find(
    (item: IntroductionTradingType) => item._id === targetId
  );

  return (
    <main className="Clevrio-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="Risk Management" headerText="Risk" />
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

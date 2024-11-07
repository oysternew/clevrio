import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { IntroductionTradingType } from "@/types";
import { introductionTrading } from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";

const targetId = "df845a39-45b2-4519-9987-b13ee75f78fc";
export const revalidate = 300;
export default async function ImportanceOfFXAndCFDTradingTutorial() {
  // Fetch data directly in the component
  const data = await introductionTrading();
  const introductionData = data.find(
    (item: IntroductionTradingType) => item._id === targetId
  );

  return (
    <main className="Clevrio-blog-main">
      <div>
        {introductionData && (
          <div id={introductionData._id} className="section-offset">
            <DivAnimateY className="container">
              <IntroductionSection introductionData={[introductionData]} />
            </DivAnimateY>
          </div>
        )}
      </div>
    </main>
  );
}

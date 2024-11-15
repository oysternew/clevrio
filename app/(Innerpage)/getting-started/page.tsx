// GettingStarted.tsx
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { IntroductionTradingType } from "@/types";
import { introductionTrading } from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";
import DivAnimateX from "@/components/utils/DivAnimateX";

const targetId = "4e4a1824-cb73-4611-93f1-17e084a41a81";
export const revalidate = 300;
export default async function GettingStarted() {
  // Fetch data directly in the component
  const data = await introductionTrading();
  const introductionData = data.find(
    (item: IntroductionTradingType) => item._id === targetId
  );

  return (
    <main className="Clevrio-blog-main">
      <Layout>
        <BreadCrumbSection
          currentPage="Getting Started"
          headerText="Setting Up"
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
        <DivAnimateX className="container section-padding">
          <div className="d-flex container  justify-content-center align-items-center ">
            <a
              href="https://capitalrevo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/img/CR Trading 2-01.png"
                alt="CR Trading slika"
                width={600}
                height={200}
                className="img-fluid rounded-lg shadow"
              />
            </a>
          </div>
        </DivAnimateX>
      </Layout>
    </main>
  );
}

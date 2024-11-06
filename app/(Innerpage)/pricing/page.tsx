import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import PartnerSection from "@/components/partner/PartnerSection";
import PricingSection from "@/components/pricing/PricingSection";
import { getPartnerLogos, getPricingData } from "@/sanity/sanity.query";
import { PartnerLogoType, PricingType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Pricing",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const partnerLogos: PartnerLogoType[] = await getPartnerLogos();
  const pricingData: PricingType[] = await getPricingData();

  return (
    <main className="Clevrio-pricing-main">
      <Layout>
        <BreadCrumbSection headerText="Pricing Plan" currentPage="Pricing" />
        {pricingData && <PricingSection pricingData={pricingData} />}
        {partnerLogos && (
          <PartnerSection style="pt-0" partnerData={partnerLogos} />
        )}
      </Layout>
    </main>
  );
}

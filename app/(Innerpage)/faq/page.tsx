import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import FaqSection from "@/components/faq/FaqSection";
import Layout from "@/components/layout/Layout";
import { getFaqData } from "@/sanity/sanity.query";
import { FaqType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - FAQ",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const faqData: FaqType[] = await getFaqData();
  return (
    <main className="Clevrio-faq-main">
      <Layout>
        <BreadCrumbSection currentPage="FAQ" />
        {faqData && <FaqSection faqData={faqData} />}
      </Layout>
    </main>
  );
}

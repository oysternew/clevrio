import AboutSection from "@/components/about/AboutSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import CategorySection from "@/components/category/CategorySection";
import CounterSection from "@/components/counter/CounterSection";
import FreeCourseSection from "@/components/course/FreeCourseSection";
import Layout from "@/components/layout/Layout";
import TestimonySection2 from "@/components/testimony/TestimonySection2";
import VideoSection2 from "@/components/video/VideoSection2";
import { getTestimonyData } from "@/sanity/sanity.query";
import { TestimonialType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - About Us",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const testimonyData: TestimonialType[] = await getTestimonyData();
  return (
    <main className="Clevrio-about-main">
      <Layout>
        <BreadCrumbSection currentPage="About" />
        <CategorySection />
        <AboutSection />
        <VideoSection2 />
        <CounterSection />
        <FreeCourseSection />
        {testimonyData && <TestimonySection2 testimonyData={testimonyData} />}
      </Layout>
    </main>
  );
}

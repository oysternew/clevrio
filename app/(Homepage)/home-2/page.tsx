import AboutSection from "@/components/about/AboutSection";
import BannerSection2 from "@/components/banner/BannerSection2";
import BlogSection from "@/components/blog/BlogSection";
import CategorySection3 from "@/components/category/CategorySection3";
import CounterSection from "@/components/counter/CounterSection";
import CourseSection from "@/components/course/CourseSection";
import FreeCourseSection from "@/components/course/FreeCourseSection";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/header/HeaderSection";
import PartnerSection from "@/components/partner/PartnerSection";
import TeamSection from "@/components/team/TeamSection";
import TestimonySection2 from "@/components/testimony/TestimonySection2";
import VideoSection2 from "@/components/video/VideoSection2";
import {
  getBlogData,
  getCourseData,
  getPartnerLogos,
  getTeamData,
  getTestimonyData,
} from "@/sanity/sanity.query";
import {
  BlogType,
  CourseType,
  PartnerLogoType,
  TeamType,
  TestimonialType,
} from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Homepage Two",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const partnerLogos: PartnerLogoType[] = await getPartnerLogos();
  const courseData: CourseType[] = await getCourseData();
  const teamData: TeamType[] = await getTeamData();
  const testimonyData: TestimonialType[] = await getTestimonyData();
  const blogData: BlogType[] = await getBlogData();

  return (
    <main className="Clevrio-home-2-main Clevrio-layout">
      <HeaderSection />
      <BannerSection2 />
      {partnerLogos && <PartnerSection partnerData={partnerLogos} />}
      <CategorySection3 />
      {courseData && <CourseSection showHeader courseData={courseData} />}
      <VideoSection2 />
      <CounterSection />
      <AboutSection />
      {teamData && <TeamSection teamData={teamData} />}
      <FreeCourseSection />
      {testimonyData && (
        <TestimonySection2 style="pb-0" testimonyData={testimonyData} />
      )}
      {blogData && <BlogSection showHeader endIndex={3} blogData={blogData} />}
      <FooterSection />
      <FooterCopyright />
    </main>
  );
}

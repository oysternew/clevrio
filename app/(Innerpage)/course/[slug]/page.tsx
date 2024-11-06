import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import CourseDetailSection from "@/components/course/CourseDetailSection";
import Layout from "@/components/layout/Layout";
import { getCourseData } from "@/sanity/sanity.query";
import { CourseType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Course Detail",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home({ params }: { params: { slug: string } }) {
  const courseData: CourseType[] = await getCourseData();

  const courseInfo = courseData.find((item) => item.slug === params.slug);
  return (
    <main className="Clevrio-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Course Details" />
        {courseInfo && (
          <CourseDetailSection
            courseInfo={courseInfo}
            courseData={courseData}
          />
        )}
      </Layout>
    </main>
  );
}

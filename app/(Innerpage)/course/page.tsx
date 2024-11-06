import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import CourseSection from "@/components/course/CourseSection";
import Layout from "@/components/layout/Layout";
import { getCourseData } from "@/sanity/sanity.query";
import { CourseType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - All Course",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const courseData: CourseType[] = await getCourseData();
  return (
    <main className="Clevrio-course-main">
      <Layout>
        <BreadCrumbSection headerText="All Course" currentPage="Course" />
        {courseData && <CourseSection courseData={courseData} />}
      </Layout>
    </main>
  );
}

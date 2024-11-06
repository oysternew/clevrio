import BlogSection from "@/components/blog/BlogSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { getBlogData } from "@/sanity/sanity.query";
import { BlogType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Blog",
  description: "Developed By ReactTemplateBuilder",
};
export const revalidate = 300;
export default async function Home() {
  const blogData: BlogType[] = await getBlogData();
  return (
    <main className="Clevrio-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="Blog" headerText="Our Blog" />
        {blogData && <BlogSection endIndex={6} blogData={blogData} />}
      </Layout>
    </main>
  );
}

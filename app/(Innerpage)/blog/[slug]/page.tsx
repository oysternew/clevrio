import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { getBlogData } from "@/sanity/sanity.query";
import { BlogType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Blog Details",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home({ params }: { params: { slug: string } }) {
  const blogData: BlogType[] = await getBlogData();

  const blogInfo = blogData.find((item) => item.slug === params.slug);
  return (
    <main className="Clevrio-blog-details-main">
      <Layout>
        <BreadCrumbSection currentPage="Blog Details" />
        {blogInfo && (
          <BlogDetailSection blogInfo={blogInfo} blogData={blogData} />
        )}
      </Layout>
    </main>
  );
}

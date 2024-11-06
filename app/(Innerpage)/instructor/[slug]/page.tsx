import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import TeamDetailSection from "@/components/team/TeamDetailSection";
import { getTeamData } from "@/sanity/sanity.query";
import { TeamType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Instructor Detail",
  description: "Developed By ReactTemplateBuilder",
};
export default async function Home({ params }: { params: { slug: string } }) {
  const teamData: TeamType[] = await getTeamData();

  const teamInfo = teamData.find((item) => item.slug === params.slug);
  return (
    <main className="Clevrio-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Instructor Details" />
        {teamInfo && <TeamDetailSection teamInfo={teamInfo} />}
      </Layout>
    </main>
  );
}

import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import TeamSection from "@/components/team/TeamSection";
import { getTeamData } from "@/sanity/sanity.query";
import { TeamType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clevrio - Instructor",
  description: "Developed By ReactTemplateBuilder",
};

export default async function Home() {
  const teamData: TeamType[] = await getTeamData();
  return (
    <main className="Clevrio-instructor-main">
      <Layout>
        <BreadCrumbSection
          headerText="Our Instructor"
          currentPage="Instructor"
        />
        {teamData && <TeamSection teamData={teamData} />}
      </Layout>
    </main>
  );
}

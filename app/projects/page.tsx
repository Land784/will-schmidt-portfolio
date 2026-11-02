import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ui/projects";
import { featuredProject, otherProjects } from "@/lib/projects-data";

export const metadata: Metadata = {
    title: "Projects — William Schmidt",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-12">Projects</h1>
                <ProjectGrid featured={featuredProject} projects={otherProjects} />
            </div>
        </main>
    );
}

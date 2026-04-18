"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/admin/shared/page-container";
import { EmptyState } from "@/components/admin/shared/empty-state";
import { ProjectFilters } from "@/components/admin/projects/project-filters";
import { ProjectsTable } from "@/components/admin/projects/projects-table";
import { projectService } from "@/services/project.service";
import { ProjectItem } from "@/types/project";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await projectService.getAll();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const q = search.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q);

      const matchesStatus = status === "all" ? true : project.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, status]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer ce projet ?"
    );

    if (!confirmed) return;

    await projectService.delete(id);
    await loadProjects();
  };

  return (
    <PageContainer
      title="Gestion des projets"
      description="Créez, modifiez et organisez les projets du portfolio."
      actions={
        <Link
          href="/admin/projects/new"
          className="rounded-2xl bg-[#05A2DA] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
        >
          Nouveau projet
        </Link>
      }
    >
      <ProjectFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement des projets...
        </div>
      ) : filteredProjects.length === 0 ? (
        <EmptyState
          title="Aucun projet trouvé"
          description="Il n’y a actuellement aucun projet correspondant à votre recherche."
          action={
            <Link
              href="/admin/projects/new"
              className="inline-flex rounded-2xl bg-[#202B59] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Créer un projet
            </Link>
          }
        />
      ) : (
        <ProjectsTable projects={filteredProjects} onDelete={handleDelete} />
      )}
    </PageContainer>
  );
}
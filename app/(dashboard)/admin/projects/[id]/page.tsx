"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PageContainer } from "@/components/admin/shared/page-container";
import { ProjectForm } from "@/components/admin/projects/project-form";
import { projectService } from "@/services/project.service";
import { ProjectFormValues, ProjectItem } from "@/types/project";

export default function EditProjectPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [project, setProject] = useState<ProjectItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.getById(Number(params.id));
        setProject(data);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params.id]);

  const handleUpdate = async (values: ProjectFormValues) => {
    setSaving(true);
    try {
      await projectService.update(Number(params.id), values);
      router.push("/admin/projects");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PageContainer title="Chargement" description="Récupération du projet...">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement...
        </div>
      </PageContainer>
    );
  }

  if (!project) {
    return (
      <PageContainer title="Introuvable" description="Ce projet n’existe pas.">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Projet introuvable.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Modifier le projet"
      description="Mettez à jour les informations du projet."
    >
      <ProjectForm initialData={project} onSubmit={handleUpdate} loading={saving} />
    </PageContainer>
  );
}
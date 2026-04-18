"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/admin/shared/page-container";
import { ProjectForm } from "@/components/admin/projects/project-form";
import { ProjectFormValues } from "@/types/project";
import { projectService } from "@/services/project.service";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (values: ProjectFormValues) => {
    setLoading(true);
    try {
      await projectService.create(values);
      router.push("/admin/projects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer
      title="Nouveau projet"
      description="Ajoutez un projet avec cover, galerie et informations détaillées."
    >
      <ProjectForm onSubmit={handleCreate} loading={loading} />
    </PageContainer>
  );
}
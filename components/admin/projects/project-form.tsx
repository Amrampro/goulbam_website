"use client";

import { useEffect, useMemo, useState } from "react";
import { InputField } from "@/components/admin/shared/input-field";
import { TextareaField } from "@/components/admin/shared/textarea-field";
import { SelectField } from "@/components/admin/shared/select-field";
import { ImageUploadField } from "@/components/admin/shared/image-upload-field";
import { MultiImageUploadField } from "@/components/admin/shared/multi-image-upload-field";
import { generateSlug } from "@/lib/admin/utils/generate-slug";
import { projectService } from "@/services/project.service";
import { ProjectFormValues, ProjectItem } from "@/types/project";

type Props = {
  initialData?: ProjectItem | null;
  onSubmit: (values: ProjectFormValues) => Promise<void>;
  loading?: boolean;
};

const PROJECT_STATUS_OPTIONS = [
  { label: "Brouillon", value: "draft" },
  { label: "Publié", value: "published" },
  { label: "Archivé", value: "archived" },
];

const PROJECT_CATEGORIES = [
  "Plateforme métier",
  "Application mobile",
  "Site web",
  "Design graphique",
  "Consulting",
];

export function ProjectForm({
  initialData,
  onSubmit,
  loading = false,
}: Props) {
  const initialValues = useMemo<ProjectFormValues>(() => {
    if (!initialData) {
      return {
        title: "",
        slug: "",
        shortDescription: "",
        fullDescription: "",
        category: "Plateforme métier",
        client: "",
        year: "",
        technologies: "",
        services: "",
        coverImage: "",
        gallery: [],
        challenge: "",
        solution: "",
        results: "",
        featured: false,
        status: "draft",
      };
    }

    return {
      title: initialData.title,
      slug: initialData.slug,
      shortDescription: initialData.shortDescription,
      fullDescription: initialData.fullDescription,
      category: initialData.category,
      client: initialData.client,
      year: initialData.year,
      technologies: initialData.technologies.join(", "),
      services: initialData.services.join(", "),
      coverImage: initialData.coverImage,
      gallery: initialData.gallery,
      challenge: initialData.challenge,
      solution: initialData.solution,
      results: initialData.results.join("\n"),
      featured: Boolean(initialData.featured),
      status: initialData.status,
    };
  }, [initialData]);

  const [values, setValues] = useState<ProjectFormValues>(initialValues);
  const [error, setError] = useState("");

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const updateField = <K extends keyof ProjectFormValues>(
    key: K,
    value: ProjectFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (value: string) => {
    setValues((prev) => ({
      ...prev,
      title: value,
      slug:
        prev.slug === "" || prev.slug === generateSlug(prev.title)
          ? generateSlug(value)
          : prev.slug,
    }));
  };

  const handleCoverUpload = async (file: File) => {
    const path = await projectService.uploadCoverImage(file);
    updateField("coverImage", path);
  };

  const handleGalleryUpload = async (files: File[]) => {
    const uploadedPaths = await projectService.uploadGalleryImages(files);
    updateField("gallery", [...values.gallery, ...uploadedPaths]);
  };

  const handleRemoveGalleryImage = (index: number) => {
    updateField(
      "gallery",
      values.gallery.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!values.title.trim()) {
      setError("Le titre est obligatoire.");
      return;
    }

    if (!values.slug.trim()) {
      setError("Le slug est obligatoire.");
      return;
    }

    if (!values.shortDescription.trim()) {
      setError("La description courte est obligatoire.");
      return;
    }

    if (!values.fullDescription.trim()) {
      setError("La description complète est obligatoire.");
      return;
    }

    try {
      await onSubmit(values);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">
            Informations principales
          </h2>

          <InputField
            label="Titre"
            placeholder="Titre du projet"
            value={values.title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />

          <InputField
            label="Slug"
            placeholder="slug-du-projet"
            value={values.slug}
            onChange={(e) => updateField("slug", generateSlug(e.target.value))}
          />

          <TextareaField
            label="Description courte"
            placeholder="Résumé court du projet"
            value={values.shortDescription}
            onChange={(e) => updateField("shortDescription", e.target.value)}
          />

          <TextareaField
            label="Description complète"
            placeholder="Description détaillée du projet"
            value={values.fullDescription}
            onChange={(e) => updateField("fullDescription", e.target.value)}
            rows={8}
          />

          <TextareaField
            label="Challenge"
            placeholder="Quel problème devait être résolu ?"
            value={values.challenge}
            onChange={(e) => updateField("challenge", e.target.value)}
          />

          <TextareaField
            label="Solution"
            placeholder="Quelle solution a été apportée ?"
            value={values.solution}
            onChange={(e) => updateField("solution", e.target.value)}
          />

          <TextareaField
            label="Résultats"
            placeholder={`Un résultat par ligne\nExemple :\nImage de marque renforcée\nMeilleure présence en ligne`}
            value={values.results}
            onChange={(e) => updateField("results", e.target.value)}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Paramètres
            </h2>

            <SelectField
              label="Catégorie"
              value={values.category}
              onChange={(e) => updateField("category", e.target.value)}
              options={PROJECT_CATEGORIES.map((item) => ({
                label: item,
                value: item,
              }))}
            />

            <InputField
              label="Client"
              placeholder="Nom du client"
              value={values.client}
              onChange={(e) => updateField("client", e.target.value)}
            />

            <InputField
              label="Année"
              type="number"
              placeholder="2026"
              value={values.year}
              onChange={(e) => updateField("year", e.target.value)}
            />

            <InputField
              label="Technologies"
              placeholder="Next.js, TypeScript, Node.js"
              value={values.technologies}
              onChange={(e) => updateField("technologies", e.target.value)}
            />

            <InputField
              label="Services"
              placeholder="Développement web, UX/UI, Consulting"
              value={values.services}
              onChange={(e) => updateField("services", e.target.value)}
            />

            <SelectField
              label="Statut"
              value={values.status}
              onChange={(e) =>
                updateField("status", e.target.value as ProjectFormValues["status"])
              }
              options={PROJECT_STATUS_OPTIONS}
            />

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input
                type="checkbox"
                checked={values.featured}
                onChange={(e) => updateField("featured", e.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
              />
              <span className="text-sm font-medium text-slate-700">
                Mettre ce projet en avant
              </span>
            </label>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Médias
            </h2>

            <ImageUploadField
              label="Image cover"
              value={values.coverImage}
              onUploaded={handleCoverUpload}
            />

            <MultiImageUploadField
              label="Galerie du projet"
              values={values.gallery}
              onUploaded={handleGalleryUpload}
              onRemove={handleRemoveGalleryImage}
            />
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
          {error}
        </div>
      ) : null}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-[#202B59] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Enregistrement..." : initialData ? "Mettre à jour" : "Créer le projet"}
        </button>
      </div>
    </form>
  );
}
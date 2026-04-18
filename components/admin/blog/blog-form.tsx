"use client";

import { useEffect, useMemo, useState } from "react";
import { BlogFormValues, BlogPostItem } from "@/types/blog";
import { InputField } from "@/components/admin/shared/input-field";
import { TextareaField } from "@/components/admin/shared/textarea-field";
import { SelectField } from "@/components/admin/shared/select-field";
import { ImageUploadField } from "@/components/admin/shared/image-upload-field";
import { generateSlug } from "@/lib/admin/utils/generate-slug";
import { blogService } from "@/services/blog.service";

type BlogFormProps = {
  initialData?: BlogPostItem | null;
  onSubmit: (values: BlogFormValues) => Promise<void>;
  loading?: boolean;
};

const BLOG_STATUS_OPTIONS = [
  { label: "Brouillon", value: "draft" },
  { label: "Publié", value: "published" },
  { label: "Archivé", value: "archived" },
];

const BLOG_CATEGORIES = [
  "Transformation digitale",
  "Web",
  "Design",
  "Consulting",
  "Innovation",
];

export function BlogForm({
  initialData,
  onSubmit,
  loading = false,
}: BlogFormProps) {
  const initialValues = useMemo<BlogFormValues>(() => {
    if (!initialData) {
      return {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "Transformation digitale",
        author: "GoulBAM Enterprises",
        publishedAt: "",
        readTime: "5 min",
        coverImage: "",
        tags: "",
        featured: false,
        status: "draft",
      };
    }

    return {
      title: initialData.title,
      slug: initialData.slug,
      excerpt: initialData.excerpt,
      content: initialData.content.join("\n\n"),
      category: initialData.category,
      author: initialData.author,
      publishedAt: initialData.publishedAt ?? "",
      readTime: initialData.readTime,
      coverImage: initialData.coverImage,
      tags: initialData.tags.join(", "),
      featured: Boolean(initialData.featured),
      status: initialData.status,
    };
  }, [initialData]);

  const [values, setValues] = useState<BlogFormValues>(initialValues);
  const [error, setError] = useState("");

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const updateField = <K extends keyof BlogFormValues>(
    key: K,
    value: BlogFormValues[K]
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

  const handleUpload = async (file: File) => {
    const uploadedPath = await blogService.uploadCoverImage(file);
    updateField("coverImage", uploadedPath);
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

    if (!values.excerpt.trim()) {
      setError("L’extrait est obligatoire.");
      return;
    }

    if (!values.content.trim()) {
      setError("Le contenu est obligatoire.");
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
            placeholder="Titre de l’article"
            value={values.title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />

          <InputField
            label="Slug"
            placeholder="slug-de-l-article"
            value={values.slug}
            onChange={(e) => updateField("slug", generateSlug(e.target.value))}
          />

          <TextareaField
            label="Extrait"
            placeholder="Résumé court de l’article"
            value={values.excerpt}
            onChange={(e) => updateField("excerpt", e.target.value)}
          />

          <TextareaField
            label="Contenu"
            placeholder={`Écris le contenu ici...\n\nSépare les paragraphes par une ligne vide.`}
            value={values.content}
            onChange={(e) => updateField("content", e.target.value)}
            rows={14}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Publication
            </h2>

            <SelectField
              label="Catégorie"
              value={values.category}
              onChange={(e) => updateField("category", e.target.value)}
              options={BLOG_CATEGORIES.map((item) => ({
                label: item,
                value: item,
              }))}
            />

            <InputField
              label="Auteur"
              placeholder="Nom de l’auteur"
              value={values.author}
              onChange={(e) => updateField("author", e.target.value)}
            />

            <InputField
              label="Date de publication"
              type="date"
              value={values.publishedAt}
              onChange={(e) => updateField("publishedAt", e.target.value)}
            />

            <InputField
              label="Temps de lecture"
              placeholder="5 min"
              value={values.readTime}
              onChange={(e) => updateField("readTime", e.target.value)}
            />

            <SelectField
              label="Statut"
              value={values.status}
              onChange={(e) =>
                updateField("status", e.target.value as BlogFormValues["status"])
              }
              options={BLOG_STATUS_OPTIONS}
            />

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input
                type="checkbox"
                checked={values.featured}
                onChange={(e) => updateField("featured", e.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
              />
              <span className="text-sm font-medium text-slate-700">
                Mettre cet article en avant
              </span>
            </label>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Image et tags
            </h2>

            <ImageUploadField
              label="Image de couverture"
              value={values.coverImage}
              onUploaded={handleUpload}
            />

            <InputField
              label="Tags"
              placeholder="digitalisation, entreprise, innovation"
              value={values.tags}
              onChange={(e) => updateField("tags", e.target.value)}
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
          {loading ? "Enregistrement..." : initialData ? "Mettre à jour" : "Créer l’article"}
        </button>
      </div>
    </form>
  );
}
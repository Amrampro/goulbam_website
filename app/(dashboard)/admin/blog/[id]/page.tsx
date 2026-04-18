"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PageContainer } from "@/components/admin/shared/page-container";
import { BlogForm } from "@/components/admin/blog/blog-form";
import { blogService } from "@/services/blog.service";
import { BlogFormValues, BlogPostItem } from "@/types/blog";

export default function EditBlogPostPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<BlogPostItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await blogService.getById(Number(params.id));
        setPost(data);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params.id]);

  const handleUpdate = async (values: BlogFormValues) => {
    setSaving(true);
    try {
      await blogService.update(Number(params.id), values);
      router.push("/admin/blog");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PageContainer title="Chargement" description="Récupération de l’article...">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement...
        </div>
      </PageContainer>
    );
  }

  if (!post) {
    return (
      <PageContainer title="Introuvable" description="Cet article n’existe pas.">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Article introuvable.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Modifier l’article"
      description="Mettez à jour les informations de l’article."
    >
      <BlogForm initialData={post} onSubmit={handleUpdate} loading={saving} />
    </PageContainer>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/admin/shared/page-container";
import { BlogForm } from "@/components/admin/blog/blog-form";
import { BlogFormValues } from "@/types/blog";
import { blogService } from "@/services/blog.service";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (values: BlogFormValues) => {
    setLoading(true);
    try {
      await blogService.create(values);
      router.push("/admin/blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer
      title="Nouvel article"
      description="Créez un nouvel article de blog."
    >
      <BlogForm onSubmit={handleCreate} loading={loading} />
    </PageContainer>
  );
}
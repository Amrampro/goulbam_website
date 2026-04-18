"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/admin/shared/page-container";
import { BlogFilters } from "@/components/admin/blog/blog-filters";
import { BlogTable } from "@/components/admin/blog/blog-table";
import { EmptyState } from "@/components/admin/shared/empty-state";
import { blogService } from "@/services/blog.service";
import { BlogPostItem } from "@/types/blog";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await blogService.getAll();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = search.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);

      const matchesStatus = status === "all" ? true : post.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [posts, search, status]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer cet article ?"
    );

    if (!confirmed) return;

    await blogService.delete(id);
    await loadPosts();
  };

  return (
    <PageContainer
      title="Gestion du blog"
      description="Créez, modifiez et organisez les articles du blog."
      actions={
        <Link
          href="/admin/blog/new"
          className="rounded-2xl bg-[#05A2DA] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
        >
          Nouvel article
        </Link>
      }
    >
      <BlogFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement des articles...
        </div>
      ) : filteredPosts.length === 0 ? (
        <EmptyState
          title="Aucun article trouvé"
          description="Il n’y a actuellement aucun article correspondant à votre recherche."
          action={
            <Link
              href="/admin/blog/new"
              className="inline-flex rounded-2xl bg-[#202B59] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Créer un article
            </Link>
          }
        />
      ) : (
        <BlogTable posts={filteredPosts} onDelete={handleDelete} />
      )}
    </PageContainer>
  );
}
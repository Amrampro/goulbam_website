"use client";

import Link from "next/link";
import { BlogPostItem } from "@/types/blog";
import { BlogStatusBadge } from "./blog-status-badge";

type BlogTableProps = {
  posts: BlogPostItem[];
  onDelete: (id: number) => void;
};

export function BlogTable({ posts, onDelete }: BlogTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-4 font-medium">Article</th>
              <th className="px-6 py-4 font-medium">Catégorie</th>
              <th className="px-6 py-4 font-medium">Auteur</th>
              <th className="px-6 py-4 font-medium">Statut</th>
              <th className="px-6 py-4 font-medium">Mis en avant</th>
              <th className="px-6 py-4 font-medium">Publication</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {posts.map((post) => (
              <tr key={post.id} className="align-top">
                <td className="px-6 py-5">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-2xl bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-950">
                        {post.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                        {post.excerpt}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">/{post.slug}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-700">{post.category}</td>
                <td className="px-6 py-5 text-sm text-slate-700">{post.author}</td>
                <td className="px-6 py-5">
                  <BlogStatusBadge status={post.status} />
                </td>
                <td className="px-6 py-5 text-sm text-slate-700">
                  {post.featured ? "Oui" : "Non"}
                </td>
                <td className="px-6 py-5 text-sm text-slate-700">
                  {post.publishedAt ?? "-"}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Éditer
                    </Link>
                    <button
                      type="button"
                      onClick={() => onDelete(post.id)}
                      className="rounded-xl border border-rose-200 px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
"use client";

import { useRef, useState } from "react";

type ImageUploadFieldProps = {
  label: string;
  value?: string;
  onUploaded: (file: File) => Promise<void>;
};

export function ImageUploadField({
  label,
  value,
  onUploaded,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setLoading(true);

    try {
      await onUploaded(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur d’upload.");
    } finally {
      setLoading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleChange}
          className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-[#202B59] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-95"
        />

        <p className="mt-2 text-xs text-slate-500">
          JPG, PNG ou WEBP — maximum 5 MB
        </p>

        {loading ? (
          <p className="mt-3 text-sm text-cyan-700">Upload en cours...</p>
        ) : null}

        {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
      </div>

      {value ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className="h-56 w-full object-cover" />
        </div>
      ) : null}
    </div>
  );
}
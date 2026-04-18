"use client";

import { useRef, useState } from "react";

type MultiImageUploadFieldProps = {
  label: string;
  values: string[];
  onUploaded: (files: File[]) => Promise<void>;
  onRemove: (index: number) => void;
};

export function MultiImageUploadField({
  label,
  values,
  onUploaded,
  onRemove,
}: MultiImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    setError("");
    setLoading(true);

    try {
      await onUploaded(files);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur d’upload.");
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = "";
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
          multiple
          onChange={handleChange}
          className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-[#202B59] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-95"
        />

        <p className="mt-2 text-xs text-slate-500">
          Sélection multiple autorisée — JPG, PNG ou WEBP — maximum 5 MB par image
        </p>

        {loading ? (
          <p className="mt-3 text-sm text-cyan-700">Upload galerie en cours...</p>
        ) : null}

        {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
      </div>

      {values.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="h-40 w-full object-cover" />
              <div className="p-3">
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="w-full rounded-xl border border-rose-200 px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
                >
                  Retirer
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
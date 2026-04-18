import fs from "node:fs/promises";
import path from "node:path";

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

export async function saveUploadedFile(file: File, folder = "blog") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const originalName = sanitizeFileName(file.name);
  const extension =
    originalName.includes(".") ? originalName.split(".").pop() : "bin";

  const uniqueName = `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}.${extension}`;

  const relativeDir = path.join("uploads", folder);
  const absoluteDir = path.join(process.cwd(), "public", relativeDir);

  await fs.mkdir(absoluteDir, { recursive: true });

  const absolutePath = path.join(absoluteDir, uniqueName);
  await fs.writeFile(absolutePath, buffer);

  const publicPath = `/${relativeDir.replace(/\\/g, "/")}/${uniqueName}`;

  return {
    publicPath,
    originalName: file.name,
    mimeType: file.type,
    size: file.size,
  };
}
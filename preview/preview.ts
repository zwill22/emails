import { load } from "js-yaml";
import { readFile } from "fs/promises";
import path from "path";
import { LinkProps } from "@/types/types";

interface PreviewData {
  name: string;
  info: string[];
  title: string;
  content: string;
  links: LinkProps[];
  preview: string;
  copyright: string;
}

async function loadData(): Promise<PreviewData> {
  const previewPath = path.join(import.meta.dirname, "preview.yml");

  const yaml = await readFile(previewPath, "utf-8");

  return load(yaml) as PreviewData;
}

export const previewData = await loadData();

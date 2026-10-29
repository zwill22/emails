import { load } from "js-yaml";
import { readFile } from "fs/promises";
import path from "path";
import { EmailProps } from "@/types/types";

async function loadData(): Promise<EmailProps> {
  const previewPath = path.join(import.meta.dirname, "../preview/preview.yml");

  const yaml = await readFile(previewPath, "utf-8");

  return load(yaml) as EmailProps;
}

export const previewData = await loadData();

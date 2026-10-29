import { load } from "js-yaml";
import { readFile } from "fs/promises";
import path from "path";
import { EmailProps } from "@/types/types";

export async function loadData(dataPath: string): Promise<EmailProps> {
  const previewPath = path.join(import.meta.dirname, dataPath);

  const yaml = await readFile(previewPath, "utf-8");

  return load(yaml) as EmailProps;
}

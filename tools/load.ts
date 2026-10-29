import { load } from "js-yaml";
import { readFile } from "fs/promises";
import { EmailProps } from "../types/types";

export async function loadData(dataPath: string): Promise<EmailProps> {
  const yaml = await readFile(dataPath, "utf-8");

  return load(yaml) as EmailProps;
}

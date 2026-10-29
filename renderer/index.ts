import { render } from "react-email";
import { EmailProps } from "../types/types";

import { EmailTemplate, Renderer } from "../types/types";
import { mkdir, readdir, writeFile } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

async function loadTypedModule(path: string): Promise<EmailTemplate> {
  try {
    const { default: defaultExport } = await import(path);
    return defaultExport as EmailTemplate;
  } catch (error) {
    console.error("Error loading module:", error);
    throw error;
  }
}

async function getFilePaths() {
  const dirPath = path.join(import.meta.dirname, "../emails");

  return new Map(
    (await readdir(dirPath)).map((file) => [
      file.split(".")[0],
      path.join(dirPath, file),
    ]),
  );
}

async function getTemplates() {
  const files = await getFilePaths();

  let templates = await Promise.all(
    Array.from(files.entries()).map(
      async ([name, path]): Promise<[string, EmailTemplate]> => [
        name,
        await loadTypedModule(path),
      ],
    ),
  );

  return new Map<string, EmailTemplate>(templates);
}

async function makeDir(dirpath: string) {
  if (!existsSync(dirpath)) {
    await mkdir(dirpath);
  }
}

export async function renderAll(
  props: EmailProps,
  outputPath: string = "../output",
  ext: string = "html",
) {
  const templates = await getTemplates();

  const output = await Promise.all(
    Array.from(templates.entries()).map(
      async ([name, template]): Promise<[string, string]> => [
        name,
        await render(template(props)),
      ],
    ),
  );

  const dirpath = path.join(import.meta.dirname, outputPath);
  await makeDir(dirpath);

  await Promise.all(
    output.map(async ([name, html]) => {
      const filename = `${name}.${ext}`;

      const filepath = path.join(dirpath, filename);
      writeFile(filepath, html);
    }),
  );
}

export async function getRenderers(): Promise<Map<string, Renderer>> {
  const templates = await getTemplates();

  const renderers = Array.from(templates.entries()).map(
    ([name, template]): [string, Renderer] => [
      name,
      async (props: EmailProps) => await render(template(props)),
    ],
  );

  return new Map(renderers);
}

import { renderAll } from "../renderer/index";
import { loadData } from "../tools/load";
import path from "path";

const cwd = import.meta.dirname;
const propsPath = path.join(cwd, "./props.yml");
const outputPath = path.join(cwd, "../output");
const templatePath = path.join(cwd, "../emails");

const data = await loadData(propsPath);

await renderAll(data, templatePath, outputPath, "html");

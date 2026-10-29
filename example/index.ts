import { renderAll } from "../renderer/index";
import { loadData } from "../tools/load";
import path from "path";

const propsPath = path.join(import.meta.dirname, "./props.yml");

const data = await loadData(propsPath);

await renderAll(data, "./output", "html");

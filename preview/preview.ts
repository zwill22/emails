import { loadData } from "../tools/load";
import path from "path";

const previewPath = path.join(import.meta.dirname, "../preview/preview.yml");

export const previewData = await loadData(previewPath);

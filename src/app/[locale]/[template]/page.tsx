import BuilderLayout from "@/components/BuilderLayout";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

export default async function TemplatePage({
  params,
}: {
  params: { locale: string; template: string };
}) {
  const { locale, template } = params;

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "templates",
      locale,
      `${template}.json`
    );
    const file = await fs.readFile(filePath, "utf-8");
    const config = JSON.parse(file);

    return <BuilderLayout template={config} />;
  } catch (error) {
    console.error("Template loading error:", error);
    return notFound();
  }
}

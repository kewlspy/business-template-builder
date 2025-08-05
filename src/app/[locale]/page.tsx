"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations();
  return (
    <>
      <LanguageSwitcher />
      <main className="bg-blue-500 text-center p-10">
        <h1 className="text-4xl font-bold">{t("main.title")}</h1>
        <p className="mt-4">{t("main.description")}</p>
      </main>
    </>
  );
}

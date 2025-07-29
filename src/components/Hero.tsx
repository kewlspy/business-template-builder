"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Hero() {
  const t = useTranslations();

  return (
    <section className="bg-yellow-100 text-center p-12">
      <LanguageSwitcher/>
      <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
      <p className="mt-2 text-lg">{t("hero.subtitle")}</p>
    </section>
  );
}

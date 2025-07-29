"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations();

  return (
    <section className="p-8 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold">{t("services.heading")}</h2>
      <ul className="mt-4 space-y-2">
        <li>{t("services.bread")}</li>
        <li>{t("services.cakes")}</li>
        <li>{t("services.catering")}</li>
      </ul>
    </section>
  );
}

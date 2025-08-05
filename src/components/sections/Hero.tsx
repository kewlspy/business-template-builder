"use client";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Hero({
  data,
}: {
  data: { title: string; subtitle: string };
}) {
  return (
    <section className="p-8 bg-yellow-100 text-center">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="mt-2 text-lg">{data.subtitle}</p>
    </section>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = ["en", "de"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Replace current locale in path with the selected one
    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex justify-end p-4">
      <select
        value={currentLocale}
        onChange={handleChange}
        className="border px-2 py-1 rounded text-sm bg-white text-gray-700 shadow-sm"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

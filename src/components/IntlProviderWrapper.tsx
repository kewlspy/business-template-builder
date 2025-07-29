"use client";

import { NextIntlClientProvider } from "next-intl";

export default function IntlProviderWrapper({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

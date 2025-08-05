import "../../styles/globals.css";
import IntlProviderWrapper from "../../components/IntlProviderWrapper";
import { ReactNode } from "react";

export const metadata = {
  title: "Business Template Builder",
  description: "GDPR-compliant small business website builder",
};

export default async function LocaleLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  let messages = {};
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    console.error(`Missing translation file for locale: ${locale}`, err);
  }

  return (
    <html lang={locale}>
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          {props.children}
        </IntlProviderWrapper>
      </body>
    </html>
  );
}

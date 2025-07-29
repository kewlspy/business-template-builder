import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config.js'; // Use the ESM config if available

const { locales, defaultLocale } = intlConfig;

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  matcher: ['/', '/(en|de)/:path*']
};

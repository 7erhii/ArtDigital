import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "il"],

  defaultLocale: "en",

  async getLocale({ request, locales, defaultLocale }) {
    const browserLocale = request.headers
      .get("accept-language")
      ?.split(",")[0]
      .slice(0, 2);

    if (!locales.includes(browserLocale)) {
      return defaultLocale;
    }

    return browserLocale;
  },
});

export const config = {
  matcher: ["/", "/(ru|en|il)/:path*"],
};

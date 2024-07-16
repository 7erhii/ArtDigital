import pick from "lodash/pick";

import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import FontResizer from "@/components/FontResizer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Colophon from "@/components/Colophon/Colophon";
import "./globals.css";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className} style={{ fontSize: "16px" }}>
        <NextIntlClientProvider
          locale={locale}
          messages={pick(messages, "Error")}
        >
          <div className="flex flex-col min-h-screen">
            <FontResizer />
            <main className="flex-grow">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

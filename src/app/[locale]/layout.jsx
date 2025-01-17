import "@/src/styles/global.scss";

// import CookiesModal from "@/src/components/modals/CookiesModal/CookiesModal";
// import PaymentModal from "@/src/components/modals/PaymentModal/PaymentModal";
// import Footer from "@/src/components/shared/Footer/Footer";
// import Header from "@/src/components/shared/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
// import ScrollToTopBtn from "@/src/components/shared/ScrollToTopBtn/ScrollToTopBtn";
// import UseAlert from "@/src/components/shared/UseAlert/UseAlert";
// import ModalDocumentPdf from "@/src/components/modals/ModalDocumentPdf/ModalDocumentPdf";
import QueryProvider from "@/src/components/providers/queryProvider";
import LayoutProvider from "@/src/components/providers/LayoutProvider";

export const metadata = {
  title: "Baza trainee 2",
  description: "Baza trainee web site",
  icons: {
    icon: ["/favicons/favicon.svg"],
  },
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale === "ua" ? "uk" : locale}>
      <body>
        <QueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </NextIntlClientProvider>
          <NextTopLoader
            color="#ff62ce"
            height={2}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #ff62ce,0 0 5px #ff62ce"
          />
        </QueryProvider>
        </body>
    </html>
  );
}

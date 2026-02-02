import type { Metadata, Viewport } from "next";
import { Montserrat, Lora } from "next/font/google";
import { Providers } from "./Providers";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { FeedbackButton } from "@/components/feedback/FeedbackButton";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LANA.celo - Cobros e inclusión financiera",
  description:
    "Cobros seguros al instante, a la voz y con comisiones ultra bajas. Potenciado por Celo.",
  openGraph: {
    title: "LANA.celo - Cobros e inclusión financiera",
    description:
      "Cobros seguros al instante, a la voz y con comisiones ultra bajas. Potenciado por Celo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#35D07F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-snow text-forest/90 antialiased">
        <Providers>
          <AnalyticsProvider>
            {children}
            <FeedbackButton />
          </AnalyticsProvider>
        </Providers>
      </body>
    </html>
  );
}

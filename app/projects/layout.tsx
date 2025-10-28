import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "context/theme";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Leo Gerbacio Romero Website | Proyectos",
  description: "Proyectos desarrollados, diseñados e implementados con participación de Leonardo Gerbacio Romero",
  icons: ['/isologo-leogerbacioromero.svg']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisteModal from "./components/modals/RegisteModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Airbnb clone",
  description: "Airbnb clone",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisteModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

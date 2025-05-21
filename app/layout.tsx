import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Aspire-lite",
  description: "The Financial OS For Modern Businesses",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex ">
          <div className="h-[100vh]"><Sidebar/></div>
          <div className="w-[calc(100vw-340px)]">{children}</div>
        </div>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}

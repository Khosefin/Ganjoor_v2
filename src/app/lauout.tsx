import "@/ui/configs/scrollConfig.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "گنجور پارسی",
  description: "جامع ترین منبع شعر و شاعران پارسی ایران",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

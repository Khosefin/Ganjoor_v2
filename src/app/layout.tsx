import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeProvider";
import TanstackProvider from "@/lib/tanstackprovider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "گنجور",
  description:
    "معتبر ترین منبع اشعار ، اثار ، تمامی شاعران و دردانه های زبان پارسی ایران زمین",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh">
        <div className="background w-full inset-0 fixed -z-10 opacity-70 blur-[1px] dark:opacity-50 h-[150%]" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackProvider>{children}</TanstackProvider>
          <Toaster richColors position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}

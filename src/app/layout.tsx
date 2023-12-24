import { Metadata } from "next";
import { ConfigProvider } from "antd";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/ui/configs/Theme";
import TanstackProvider from "@/lib/tanstackprovider";

import "@/ui/configs/scrollConfig.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "گنجور",
  description: "گنجور دردانه های زبان پارسی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <SpeedInsights />
            <TanstackProvider>{children}</TanstackProvider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

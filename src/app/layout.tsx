import { Metadata } from "next";
import { ConfigProvider } from "antd";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/ui/configs/Theme";
import TanstackProvider from "@/lib/tanstackprovider";
import Navbar from "@/ui/components/navbar";
import ImageSlider from "@/ui/components/swiper/ImageSlider";

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
      <SpeedInsights />
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <body className="tw-min-h-[100vh] tw-bg-[#f5f5f5] tw-flex tw-flex-col tw-items-center">
            <TanstackProvider>
              <Navbar />
              <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3">
                <ImageSlider />
                {/* <Location /> */}
              </div>
              {children}
            </TanstackProvider>
          </body>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </html>
  );
}

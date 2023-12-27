"use client";
import { ConfigProvider } from "antd";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/ui/configs/Theme";
import TanstackProvider from "@/lib/tanstackprovider";
import { Provider } from "react-redux";
import { store } from "@/redux/slice";

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
            <Provider store={store}>
              <TanstackProvider>{children}</TanstackProvider>
            </Provider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

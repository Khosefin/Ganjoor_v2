"use client";
import { store } from "@/redux/slice";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  );
}

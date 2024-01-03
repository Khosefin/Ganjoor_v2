import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "تایید نهایی ثبت نام",
  description: "صفحه ی تایید نهایی ورود به حساب کاربری سایت گنجور",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!cookies().has("accessCode")) redirect("/signup");
  return <>{children}</>;
}

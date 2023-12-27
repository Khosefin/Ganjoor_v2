"use client";
import { redirect } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as any) || "";
  if (userInfo) redirect("/");
  return <>{children}</>;
}

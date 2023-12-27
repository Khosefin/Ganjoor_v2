"use client";

import { setUserInfo } from "@/redux/slice";
import { useDispatch } from "react-redux";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const isRemember =
    JSON.parse(localStorage.getItem("isRemember") as any) || false;
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as any) || "";
  if (isRemember && !!Object.keys(userInfo).length) {
    dispatch(setUserInfo(userInfo));
  }
  return <>{children}</>;
}

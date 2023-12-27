"use client";
import { setUserInfo } from "@/redux/slice";
import Navbar from "@/ui/components/navbar";
import ImageSlider from "@/ui/components/swiper/ImageSlider";
import { useDispatch } from "react-redux";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const isRemember = JSON.parse(localStorage.getItem("isRemember") as any);
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as any) || "";
  if (isRemember && !!Object.keys(userInfo).length) {
    dispatch(setUserInfo(userInfo));
  }
  return (
    <>
      <div className="tw-min-h-[100vh] tw-bg-[#f5f5f5] tw-flex tw-flex-col tw-items-center tw-text-center">
        <Navbar />
        <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3">
          <ImageSlider />
        </div>
        {children}
      </div>
    </>
  );
}

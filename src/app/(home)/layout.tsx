"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/slice";
import Navbar from "@/ui/components/navbar";
import ImageSlider from "@/ui/components/swiper/ImageSlider";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="tw-min-h-[100vh] tw-bg-[#f5f5f5] tw-flex tw-flex-col tw-items-center tw-text-center">
        <Provider store={store}>
          <Navbar />
          <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3">
            <ImageSlider />
          </div>
          {children}
        </Provider>
      </div>
    </>
  );
}

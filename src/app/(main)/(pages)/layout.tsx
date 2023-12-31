import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/swiper/ImageSlider";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <Navbar />
        <div className="w-[94%] max-md:w-[97%] mb-3">
          <ImageSlider />
        </div>
        {children}
      </div>
    </>
  );
}

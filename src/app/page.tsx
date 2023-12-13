import ImageSlider from "@/ui/components/swiper/ImageSlider";
import Poet from "@/ui/components/poet";
import Sidebar from "@/ui/components/sidebar";

export default function Home() {
  const Poets = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
      <div className="tw-w-[83%] tw-mb-5">
        <ImageSlider />
      </div>
      <div className="tw-flex tw-justify-center tw-gap-5">
        <Sidebar />
        <div className="tw-grid tw-grid-cols-3 tw-gap-4">
          {Poets.map((item) => (
            <Poet
              img="/azar.png"
              name="آذر بیگدلی"
              birthlocation="اصفهان"
              deathlocation="قم"
              century={10}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

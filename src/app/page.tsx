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
    <div className="tw-flex tw-flex-col tw-w-10/12">
      <div className="tw-flex max-md:tw-flex-col tw-gap-5 max-sm:tw-gap-3">
        <Sidebar />
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-5 max-sm:tw-grid-cols-1 tw-gap-4 tw-w-full">
          {Poets.map((item) => (
            <Poet
              img="/azar.png"
              name="فردوسی"
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

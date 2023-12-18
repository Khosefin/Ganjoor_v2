"use client";
import Poet from "@/ui/components/poet";
import Sidebar from "@/ui/components/sidebar";
import { useQuery } from "@tanstack/react-query";
import { Skeleton, Spin } from "antd";
import axios from "axios";

export interface poet {
  id: number;
  birthPlace: string;
  birthYearInLHijri: number;
  deathPlace: string;
  fullUrl: string;
  imageUrl: string;
  name: string;
}

const Home = () => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Poets"],
    queryFn: async () => {
      const data = await axios.get("https://api.ganjoor.net/api/ganjoor/poets");
      return data.data;
    },
  });
  return (
    <div className="tw-flex tw-flex-col tw-w-11/12 max-md:tw-w-[96%]">
      <div className="tw-flex max-md:tw-flex-col tw-gap-4 max-sm:tw-gap-3">
        <Sidebar />
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-5 max-sm:tw-grid-cols-1 tw-gap-4 tw-w-full">
          {isSuccess &&
            data.map((poet: poet) => <Poet key={poet.id} {...poet} />)}
        </div>
      </div>
    </div>
  );
};
export default Home;

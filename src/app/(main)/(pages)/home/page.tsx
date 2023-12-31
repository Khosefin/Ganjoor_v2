"use client";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import type { poetList, location } from "@/lib/types";
import { useIntersection } from "@mantine/hooks";
import { toast } from "sonner";
import axios from "axios";
import PoetList from "@/components/PoetList";
import Sidebar from "@/components/Sidebar";
import Loading from "@/components/loading";
import { HomeIcon } from "@radix-ui/react-icons";
import Location from "@/components/location"


export default function Home() {
  const poetFilter: string = useSelector((state: any) => state.poets.poetName);
  const CenturyNum: number = useSelector(
    (state: any) => state.poets.centuryNum
  );

  const location: Array<location> = [
    {
      name: "خانه",
      icon: <HomeIcon className="h-[1.1rem] w-[1.1rem]" />,
      href: "/",
    },
  ];

  const { data, status } = useQuery({
    queryKey: ["PoetList"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.ganjoor.net/api/ganjoor/poets"
      );
      return response.data as poetList[];
    },
    retry: 1,
  });

  useEffect(() => {
    if (status === "error")
      toast.loading("مشکل در اتصال", {
        description: "لطفا اینترنت خود را بررسی کنید",
        action: {
          label: "تلاش دوباره",
          onClick: () => window.location.reload(),
        },
      });
  }, [status]);

  const filteredPoets = data?.filter(
    (poet) =>
      (!poetFilter || poet.name.includes(poetFilter)) &&
      (!CenturyNum || Math.ceil(poet.birthYearInLHijri / 100) === CenturyNum)
  );

  const lastPostRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }
  }, [entry]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = filteredPoets?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedPoets = filteredPoets?.slice(0, currentPage * itemsPerPage);

  return (
    <>
      {(status === "pending" || status === "error") && <Loading />}
      {status === "success" && (
        <div className="w-[94%] max-md:w-[96%]">
          <Location location={location}  />
          <div className="flex max-md:flex-col gap-4 max-sm:gap-3">
            <Sidebar />
            <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 max-sm:grid-cols-2 gap-5 w-full mt-2">
              {paginatedPoets?.map((poet: any, index: number) => (
                <div
                  key={index}
                  className="relative h-[280px]"
                  ref={index === paginatedPoets.length - 1 ? ref : undefined}
                >
                  {!!Object.keys(poet).length ? (
                    <PoetList {...poet} />
                  ) : (
                    <div>شاعری یافت نشد</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

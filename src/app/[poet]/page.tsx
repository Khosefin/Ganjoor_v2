"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./poet.css";
import { redirect } from "next/navigation";
import Loading from "@/ui/components/loading";
import PoetCard from "@/ui/components/poetCard";

export interface Poet {
  htmlText: string;
  poetOrCat: {
    poet: {
      birthPlace: string;
      birthYearInLHijri: number;
      deathYearInLHijri: number;
      deathPlace: string;
      fullUrl: string;
      imageUrl: string;
      name: string;
      description: string;
    };
    cat: {
      children: [
        {
          id: number;
          title: string;
          fullUrl: string;
        }
      ];
      poems: [
        {
          id: number;
          title: string;
          urlSlug: string;
        }
      ];
    };
  };
}

export default function Poet({ params }: { params: { poet: string } }) {
  const { data, isError, isLoading, isSuccess } = useQuery<Poet>({
    queryKey: ["Poet"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}&catPoems=true`
      );
      return response.data as Poet;
    },
    retry: 2,
  });

  if (isError) redirect("/");

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <div className="tw-flex tw-justify-center tw-gap-5 tw-w-11/12">
          <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 tw-sticky tw-rounded-xl tw-w-3/5 tw-h-full">
            <PoetCard data={data} params={params.poet} />
          </div>

          <div
            className="main"
            dangerouslySetInnerHTML={{ __html: data.htmlText }}
          />
        </div>
      )}
    </>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./poem.css";
import PoetCard from "@/ui/components/poetCard";
import Loading from "@/ui/components/loading";
import { redirect } from "next/navigation";

export default function Poem({
  params,
}: {
  params: { poem: string; poet: string };
}) {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Poem", params],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}%2F${
          params.poem[0]
        }${params.poem[1] ? `%2F${params.poem[1]}` : ""}${
          params.poem[2] ? `%2F${params.poem[2]}` : ""
        }&catPoems=true`
      );
      const responsePoetcard = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}&catPoems=true`
      );
      return [response.data, responsePoetcard.data];
    },
    retry: 2,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    redirect("/")
  }

  if (isSuccess) {
    return (
      <div className="tw-flex tw-justify-center tw-gap-5 tw-w-11/12">
        <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 tw-sticky tw-rounded-xl tw-w-3/5 tw-h-full">
          <PoetCard data={data[1]} params={params.poet} />
        </div>
        <div
          className="main"
          dangerouslySetInnerHTML={{ __html: data[0].htmlText }}
        />
      </div>
    );
  }

  return null;
}

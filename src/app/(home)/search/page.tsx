"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import "./page.css";
import { useRouter, useSearchParams } from "next/navigation";
import PoetList from "@/ui/components/poetList";
import React, { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import Loading from "@/ui/components/loading";

const fetchPosts = async (pageParam: number, term: string) => {
  const response = await axios.get(
    `https://api.ganjoor.net/api/ganjoor/poems/search?PageNumber=${pageParam}&PageSize=7&term=${term}&poetId=0&catId=0`
  );
  return response.data;
};

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const term = searchParams.get("term") as string;

  const { data, fetchNextPage, isSuccess, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["search", term],
      queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
        fetchPosts(pageParam, term),
      initialPageParam: 1,
      getNextPageParam: (_, allPages) => allPages.length + 1,
      retry: 1,
    });

  const lastPostRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, term]);

  if (isLoading || isError) return <Loading />;

  if (!term || isError) {
    router.push("/");
    return null;
  }

  const posts = data?.pages.flatMap((page) => page);

  if (isSuccess) {
    const updatedPosts = posts
      ?.map((obj) => {
        const updatedHtmlText = obj.htmlText.replace(
          new RegExp(term, "g"),
          (match: any) =>
            `<span class="tw-text-red-700 tw-bg-red-50 tw-font-danaSB founded tw-border-b-2 tw-border-dashed tw-border-red-700">${match}</span>`
        );
        return updatedHtmlText.includes(term)
          ? { ...obj, htmlText: updatedHtmlText }
          : undefined;
      })
      .filter(Boolean);

    return (
      <div className="tw-grid tw-w-[78%] max-lg:tw-w-[90%]">
        {updatedPosts?.map((obj: any, index: number) => (
          <div
            className="tw-flex tw-mb-4 tw-gap-4 tw-cursor-pointer"
            onClick={() => router.push(obj.fullUrl)}
            key={index}
            ref={index === updatedPosts.length - 2 ? ref : undefined}
          >
            <div className="tw-flex tw-flex-col tw-items-center tw-mb-8 tw-border-t-2 tw-h-full tw-border-red-700 tw-rounded-xl tw-w-full tw-bg-white tw-py-10 tw-px-5 tw-justify-evenly searchDiv">
              <h1 className="tw-font-danaSB tw-text-2xl max-lg:tw-text-xl max-sm:tw-text-base">
                {obj.fullTitle}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: obj.htmlText }} />
            </div>
            <div className="tw-w-[30%] max-md:tw-hidden">
              <PoetList {...obj.category.poet} isSticky={true} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

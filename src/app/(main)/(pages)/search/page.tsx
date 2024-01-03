"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import PoetList from "@/components/poetList";
import React, { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import Loading from "@/components/loading";

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

  if (isSuccess && data?.pages[0].length) {
    const updatedPosts = posts
      ?.map((obj) => {
        const updatedHtmlText = obj.htmlText.replace(
          new RegExp(term, "g"),
          (match: any) =>
            `<span class="text-primary font-yekanXBlack founded text-lg max-lg:text-sm px-[2px]">${match}</span>`
        );
        return updatedHtmlText.includes(term)
          ? { ...obj, htmlText: updatedHtmlText }
          : undefined;
      })
      .filter(Boolean);

    return (
      <div className="grid w-[78%] max-lg:w-[90%] relative">
        {updatedPosts?.map((obj: any, index: number) => (
          <div
            className="flex mb-4 gap-4 cursor-pointer"
            onClick={() => router.push(obj.fullUrl)}
            key={index}
            ref={index === updatedPosts.length - 2 ? ref : undefined}
          >
            <div className="flex flex-col items-center mb-8 h-full rounded-md w-full bg-background py-10 px-5 justify-evenly searchDiv relative">
              <h1 className="font-yekanBlack text-xl max-lg:text-base max-sm:text-sm">
                {obj.fullTitle}
              </h1>
              <div
                className="font-yekanLight"
                dangerouslySetInnerHTML={{ __html: obj.htmlText }}
              />
              <div className="absolute inset-0 rounded-md translate-x-1 -translate-y-1 bg-gradient-to-br from-orange-800 via-orange-400 to-orange-800 -z-10 dark:opacity-80" />
            </div>
            <div className="w-[30%] max-md:hidden h-[270px] relative">
              <PoetList {...obj.category.poet} isSticky={true} />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    router.push("/home?error=notFound");
    return null;
  }
}

"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./poem.css";
import PoetCard from "@/ui/components/poetCard";
import Loading from "@/ui/components/loading";
import { useRouter } from "next/navigation";
import { Breadcrumb, notification } from "antd";
import { useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function Poem({
  params,
}: {
  params: { poem: string; poet: string };
}) {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const { data, status, isError } = useQuery({
    queryKey: ["PoemList", params.poem[0], params.poem[1], params.poem[2]],
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
    staleTime: 0,
  });

  console.log(data);

  useEffect(() => {
    if (isError) {
      api.error({
        message: `ادرس معتبر نیست`,
        description: "درحال بازگردانی به صفحه ی اصلی ...",
        placement: "bottomRight",
        duration: 10,
        closeIcon: null,
      });

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [isError]);

  return (
    <>
      {contextHolder}
      {status === "pending" || status === "error" ? <Loading /> : null}
      {status === "success" ? (
        <>
          <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3 tw-bg-white tw-py-2 tw-pr-4 tw-rounded-xl tw-drop-shadow-sm">
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: (
                    <>
                      <MenuOutlined />
                      &nbsp;&nbsp;
                      <span className="tw-align-middle">صفحه اصلی</span>
                    </>
                  ),
                  href: "/",
                },
                {
                  title: data[1].poetOrCat.poet.name,
                  href: `/${params.poet}`,
                },
                {
                  title: data[0].title,
                },
              ]}
            />
          </div>
          <div className="tw-flex max-lg:tw-flex-col tw-justify-center tw-gap-5 tw-w-11/12">
            <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 lg:tw-sticky tw-rounded-xl tw-w-3/5 max-lg:tw-w-full tw-h-full">
              <PoetCard data={data[1]} params={params.poet} />
            </div>
            <div
              className="main"
              dangerouslySetInnerHTML={{ __html: data[0].htmlText }}
            />
          </div>
        </>
      ) : null}
    </>
  );
}

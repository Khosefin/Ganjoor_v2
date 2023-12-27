"use client";

import React, { Fragment, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Breadcrumb, notification } from "antd";
import Loading from "@/ui/components/loading";
import PoetCard from "@/ui/components/poetCard";
import { MenuOutlined } from "@ant-design/icons";
import { Poet, PoetProps } from "@/lib/types";


const Poet: React.FC<PoetProps> = ({ params }) => {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const { data, isError, isLoading, isSuccess } = useQuery<Poet>({
    queryKey: ["Poet", params.poet],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}&catPoems=true`
      );
      return response.data as Poet;
    },
    retry: 1,
    staleTime: 0,
  });

  const location = [
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
      title: data?.poetOrCat.poet.name,
      href: `/${params.poet}`,
    },
  ];

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

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <Fragment key={JSON.stringify(isLoading)}>
      {contextHolder}
      {isSuccess && (
        <>
          <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3 tw-bg-white tw-py-2 tw-pr-4 tw-rounded-xl tw-drop-shadow-sm">
            <Breadcrumb separator=">" items={location} />
          </div>
          <div className="tw-flex max-lg:tw-flex-col tw-justify-center tw-gap-5 tw-w-11/12">
            <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 lg:tw-sticky tw-rounded-xl tw-w-3/5 max-lg:tw-w-full tw-h-full">
              <PoetCard data={data} params={params.poet} />
            </div>
            <div
              className="main"
              dangerouslySetInnerHTML={{ __html: data.htmlText }}
              key={JSON.stringify(isSuccess)}
            />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Poet;

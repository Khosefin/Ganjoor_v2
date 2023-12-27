"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Breadcrumb, notification } from "antd";
import axios from "axios";
import PoetList from "@/ui/components/poetList";
import Sidebar from "@/ui/components/sidebar";
import Loading from "@/ui/components/loading";
import { MenuOutlined } from "@ant-design/icons";
import { poet } from "@/lib/types";

const Home = () => {
  const [api, contextHolder] = notification.useNotification();
  const poetFilter: string = useSelector((state: any) => state.poets.poetName);
  const CenturyNum: number = useSelector(
    (state: any) => state.poets.CenturyNum
  );

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
  ];

  const { data, status } = useQuery({
    queryKey: ["PoetList"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.ganjoor.net/api/ganjoor/poets"
      );
      return response.data as poet[];
    },
    retry: 1,
    staleTime: 0,
  });

  useEffect(() => {
    if (status === "error") {
      api.error({
        message: "مشکل در اتصال با سرور !",
        description:
          "لطفا از اتصال خود به اینترنت اطمینان حاصل نمایید و درصورت روشن بودن هرگونه فیلترشکن ان را خاموش کنید! سپس صفحه را رفرش کنید...",
        placement: "bottomRight",
        duration: 10,
        closeIcon: null,
      });
    }
  }, [status]);

  const filteredPoets = data?.filter(
    (poet) =>
      (!poetFilter || poet.name.includes(poetFilter)) &&
      (!CenturyNum || Math.ceil(poet.birthYearInLHijri / 100) === CenturyNum)
  );

  return (
    <>
      {contextHolder}
      {(status === "pending" || status === "error") && <Loading />}
      {status === "success" && (
        <>
          <div className="tw-w-[91%] max-md:tw-w-[96%] tw-mb-3 tw-bg-white tw-py-2 tw-pr-4 tw-rounded-xl tw-drop-shadow-sm">
            <Breadcrumb separator=">" items={location} />
          </div>
          <div className="tw-flex tw-flex-col tw-w-11/12 max-md:tw-w-[96%]">
            <div className="tw-flex max-md:tw-flex-col tw-gap-4 max-sm:tw-gap-3">
              <Sidebar />
              <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-5 max-sm:tw-grid-cols-1 tw-gap-5 tw-w-full">
                {filteredPoets?.map((poet) => (
                  <React.Fragment key={poet.id}>
                    {poet ? (
                      <PoetList key={poet.id} {...poet} />
                    ) : (
                      <div>شاعری یافت نشد</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

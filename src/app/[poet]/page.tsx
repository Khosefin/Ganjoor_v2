"use client";

import { Button, Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./poet.css";

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
  const [ellipsis] = useState(true);
  const { Paragraph } = Typography;
  const { data, isError, isLoading, isSuccess } = useQuery<Poet>({
    queryKey: ["Poets"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}&catPoems=true`
      );
      return response.data as Poet;
    },
  });

  console.log(data);

  return (
    <div className="tw-flex tw-justify-center tw-gap-5 tw-w-11/12">
      {isSuccess && (
        <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 tw-sticky tw-rounded-xl tw-w-3/5 tw-h-full">
          <Card
            className=" tw-text-justify"
            actions={[
              <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
                تولد:
                <span className="tw-font-danaR tw-text-[13px]">
                  {data?.poetOrCat.poet.birthPlace}
                </span>
              </p>,
              <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
                تاریخ تولد:
                <span className="tw-font-danaR tw-text-[13px]">
                  {data?.poetOrCat.poet.birthYearInLHijri}
                </span>
              </p>,
              <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
                وفات:
                <span className="tw-font-danaR tw-text-[13px]">
                  {data?.poetOrCat.poet.deathPlace}
                </span>
              </p>,
              <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
                تاریخ وفات:
                <span className="tw-font-danaR tw-text-[13px]">
                  {data?.poetOrCat.poet.deathYearInLHijri}
                </span>
              </p>,
              <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
                دوره:
                <span className="tw-font-danaR tw-text-[13px]">قرن 10</span>
              </p>,
            ]}
          >
            <Meta
              avatar={
                <img
                  src={`https://api.ganjoor.net${data?.poetOrCat.poet.imageUrl}`}
                  width={110}
                  height={80}
                  alt="poet picture"
                />
              }
              title={data?.poetOrCat.poet.name}
              description={
                <Paragraph
                  className="tw-text-current tw-font-danaL tw-leading-6"
                  ellipsis={
                    ellipsis
                      ? { rows: 3, expandable: true, symbol: "بیشتر" }
                      : false
                  }
                >
                  {data?.poetOrCat.poet.description}
                </Paragraph>
              }
            />
          </Card>
          <Button
            className="tw-w-full tw-border-red-700 tw-text-red-700 tw-mt-3 tw-text-base tw-h-9"
            type="default"
          >
            دیوان اشعار
          </Button>
        </div>
      )}

      {isSuccess && (
        <div className="main">
          <div dangerouslySetInnerHTML={{ __html: data.htmlText }} />
        </div>
      )}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}
    </div>
  );
}

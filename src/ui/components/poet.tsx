"use client";
import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

interface params {
  img: string;
  name: string;
  birthlocation: string;
  deathlocation: string;
  century: number;
}

export default function Poet({
  img,
  name,
  birthlocation,
  deathlocation,
  century,
}: params) {
  return (
    <div className="hover:tw-shadow-xl tw-drop-shadow-sm tw-h-[182px] tw-cursor-pointer tw-border tw-rounded-xl">
      <Card
        className="tw-w-80"
        actions={[
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">  تولد:
            <span className="tw-font-danaR tw-text-[13px]"> {birthlocation}</span>
          </p>,
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">  وفات:
            <span className="tw-font-danaR tw-text-[13px]"> {deathlocation}</span>
          </p>,
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">  قرن:
            <span className="tw-font-danaR tw-text-[13px]"> {century}</span>
          </p>,
       
        ]}
      >
        <Meta
          className="tw-flex tw-items-center"
          avatar={<Image src={img} width="70" height="70" alt="poet picture" />}
          title={name}
          description="شاعر قرن پنجم"
        />
      </Card>
    </div>
  );
}

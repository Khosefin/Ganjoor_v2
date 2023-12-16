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

export default function Poets({
  img,
  name,
  birthlocation,
  deathlocation,
  century,
}: params) {
  return (
    <>
    <div className="hover:tw-shadow-xl  tw-drop-shadow-sm tw-cursor-pointer tw-border tw-rounded-xl max-md:tw-hidden">
      <Card
        actions={[
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px] tw-font-danaSB">  تولد:
            <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px]"> {birthlocation}</span>
          </p>,
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px] tw-font-danaSB">  وفات:
            <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px]"> {deathlocation}</span>
          </p>,
          <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px] tw-font-danaSB">  قرن:
            <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px]"> {century}</span>
          </p>,
       
        ]}
      >
        <Meta
          className="tw-flex tw-flex-col tw-items-center max-sm:tw-h-14"
          avatar={<img src={img} className="-tw-translate-x-2 tw-w-14 md:tw-w-20 tw-mb-2 max-sm:tw-absolute max-sm:tw-translate-x-5 max-sm:-tw-translate-y-3" alt="poet picture" />}
          title={<p className="tw-text-base md:tw-text-lg tw-font-danaL max-sm:tw-absolute max-sm:tw-translate-x-6 max-sm:tw-translate-y-12">{name}</p>}
        />
      </Card>
    </div>
    <div className="hover:tw-shadow-xl tw-drop-shadow-sm tw-cursor-pointer tw-border tw-rounded-xl md:tw-hidden">
      <Card

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
    </>
  );
}

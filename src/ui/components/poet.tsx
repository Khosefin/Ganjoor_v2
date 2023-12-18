"use client";
import { poet } from "@/app/page";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";

export default function Poets({
  imageUrl,
  name,
  birthPlace,
  fullUrl,
  deathPlace,
  birthYearInLHijri,
}: poet) {
  const router = useRouter();
  return (
    <Card
      className="hover:tw-shadow-xl tw-drop-shadow-smtw-cursor-pointer tw-border tw-rounded-xl tw-flex tw-flex-col tw-justify-between "
      onClick={() => router.push(fullUrl)}
      actions={[
        <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px]  max-md:tw-text-[13px] tw-font-danaSB tw-h-full">
          تولد:
          <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px] max-md:tw-text-[13px]">
            {birthPlace ? birthPlace : "نامشخص"}
          </span>
        </p>,
        <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px]  max-md:tw-text-[13px] tw-font-danaSB">
          وفات:
          <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px] max-md:tw-text-[13px]">
            {deathPlace ? deathPlace : "نامشخص"}
          </span>
        </p>,
        <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px]  max-md:tw-text-[13px] tw-font-danaSB">
          قرن:
          <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px] max-md:tw-text-[13px]">
            {birthYearInLHijri}
          </span>
        </p>,
      ]}
    >
      <Meta
        className="tw-flex md:tw-flex-col tw-items-center max-sm:tw-h-14"
        avatar={
          <img
            src={`https://api.ganjoor.net${imageUrl}`}
            className="sm:-tw-translate-x-2 tw-w-14 md:tw-w-20 tw-mb-2"
            alt="poet picture"
          />
        }
        title={
          <p className="tw-text-base md:tw-text-lg tw-font-danaL tw-whitespace-pre-wrap tw-text-center">
            {name}
          </p>
        }
      />
    </Card>
  );
}

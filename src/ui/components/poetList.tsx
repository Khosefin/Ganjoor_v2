"use client";
import { poet } from "@/app/page";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";

export default function PoetList({
  imageUrl,
  name,
  birthPlace = "نامشخص",
  deathPlace = "نامشخص",
  birthYearInLHijri,
  fullUrl,
}: poet) {
  const router = useRouter();

  return (
    <Card
      className="hover:tw-shadow-xl tw-drop-shadow-smtw-cursor-pointer tw-border tw-rounded-xl tw-flex tw-flex-col tw-justify-between "
      onClick={() => router.push(fullUrl)}
      actions={getCardActions(birthPlace, deathPlace, birthYearInLHijri)}
    >
      <Meta
        className="tw-flex md:tw-flex-col tw-items-center max-sm:tw-h-14"
        avatar={getAvatar(imageUrl)}
        title={getTitle(name)}
      />
    </Card>
  );
}

function getCardActions(
  birthPlace: string,
  deathPlace: string,
  birthYearInLHijri: number
) {
  return [
    renderAction("تولد:", birthPlace),
    renderAction("وفات:", deathPlace),
    renderAction("قرن:", birthYearInLHijri),
  ];
}

function renderAction(label: string, value: string | number) {
  return (
    <p
      key={label}
      className="tw-flex tw-flex-col tw-gap-1 tw-text-[10px] md:tw-text-[12px]  max-md:tw-text-[13px] tw-font-danaSB tw-h-full"
    >
      {label}
      <span className="tw-font-danaR tw-text-[10px] md:tw-text-[12px] max-md:tw-text-[13px]">
        {value ? value : "نامشخص"}
      </span>
    </p>
  );
}

function getAvatar(imageUrl: string) {
  return (
    <img
      src={`https://api.ganjoor.net${imageUrl}`}
      className="sm:-tw-translate-x-2 tw-w-14 md:tw-w-24 tw-mb-2"
      alt="poet picture"
    />
  );
}

function getTitle(name: string) {
  return (
    <p className="max-sm:tw-text-xl tw-text-lg tw-font-danaL tw-whitespace-pre-wrap tw-text-center">
      {name}
    </p>
  );
}

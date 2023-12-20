"use client";
import { Button, Card, Typography } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./poet.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import Loading from "@/ui/components/loading";

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

interface PoetInfo {
  birthPlace: string;
  birthYearInLHijri: number;
  deathYearInLHijri: number;
  deathPlace: string;
  imageUrl?: string;
  name?: string;
  description?: string;
}

const { Paragraph } = Typography;

export default function Poet({ params }: { params: { poet: string } }) {
  const { data, isError, isLoading, isSuccess } = useQuery<Poet>({
    queryKey: ["Poet"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet}&catPoems=true`
      );
      return response.data as Poet;
    },
    retry: 2,
  });

  const poetInfo: PoetInfo | undefined = data?.poetOrCat?.poet;

  if (isError) redirect("/");

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <div className="tw-flex tw-justify-center tw-gap-5 tw-w-11/12">
          <div className="tw-cursor-pointer tw-drop-shadow-md tw-top-20 tw-sticky tw-rounded-xl tw-w-3/5 tw-h-full">
            <Card
              className="tw-text-justify"
              actions={getCardActions(poetInfo)}
            >
              <Card.Meta
                avatar={getAvatar(poetInfo)}
                title={poetInfo?.name}
                description={getDescription(poetInfo)}
              />
            </Card>

            {data.poetOrCat?.cat?.children?.map((child) => (
              <Link key={child.id} href={child.fullUrl}>
                <Button
                  className="tw-w-full tw-mt-3 tw-bg-red-700 tw-text-base tw-h-9"
                  type="primary"
                >
                  {child.title}
                </Button>
              </Link>
            ))}
            {data.poetOrCat?.cat?.poems?.map((child) => (
              <Link key={child.id} href={`${params.poet}/${child.urlSlug}`}>
                <Button
                  className="tw-w-full tw-border-red-700 tw-text-red-700 tw-mt-3 tw-text-base tw-h-9"
                  type="default"
                >
                  {child.title}
                </Button>
              </Link>
            ))}
          </div>

          <div
            className="main"
            dangerouslySetInnerHTML={{ __html: data.htmlText }}
          />
        </div>
      )}
    </>
  );
}

function getCardActions(poetInfo?: PoetInfo) {
  if (!poetInfo) return [];

  const commonProperties: (keyof PoetInfo)[] = [
    "birthPlace",
    "birthYearInLHijri",
    "deathPlace",
    "deathYearInLHijri",
  ];
  return commonProperties.map((property) => (
    <p
      key={property}
      className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB"
    >
      {getLabel(property)}:
      <span className="tw-font-danaR tw-text-[13px]">{poetInfo[property]}</span>
    </p>
  ));
}

function getLabel(property: keyof PoetInfo) {
  const labels: Record<string, string> = {
    birthPlace: "تولد",
    birthYearInLHijri: "تاریخ تولد",
    deathPlace: "وفات",
    deathYearInLHijri: "تاریخ وفات",
  };
  return labels[property];
}

function getAvatar(poetInfo?: PoetInfo) {
  return (
    <img
      src={
        poetInfo?.imageUrl ? `https://api.ganjoor.net${poetInfo.imageUrl}` : ""
      }
      width={110}
      height={80}
      alt="poet picture"
    />
  );
}

function getDescription(poetInfo?: PoetInfo) {
  return (
    <Paragraph
      className="tw-text-current tw-font-danaL tw-leading-6"
      ellipsis={{ rows: 3, expandable: true, symbol: "بیشتر" }}
    >
      {poetInfo?.description}
    </Paragraph>
  );
}

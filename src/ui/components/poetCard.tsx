import { Poet } from "@/app/(home)/[poet]/page";
import { Button, Card, Typography } from "antd";
import Link from "next/link";

interface PoetInfo {
  birthPlace: string;
  birthYearInLHijri: number;
  deathYearInLHijri: number;
  deathPlace: string;
  imageUrl?: string;
  name?: string;
  description?: string;
}

interface CatChild {
  id: number;
  title: string;
  fullUrl: string;
}

interface CatPoem {
  id: number;
  title: string;
  urlSlug: string;
}

const { Paragraph } = Typography;
export default function PoetCard({
  data,
  params,
}: {
  data: Poet;
  params: string | string[] | undefined;
}) {
  const poetInfo: PoetInfo | undefined = data?.poetOrCat?.poet;
  return (
    <>
      <Card
        className="tw-text-justify tw-mb-2"
        actions={getCardActions(poetInfo)}
      >
        <Card.Meta
        className="max-sm:tw-flex max-sm:tw-flex-col max-sm:tw-items-center max-sm:tw-text-center"
          avatar={getAvatar(poetInfo)}
          title={poetInfo?.name}
          description={getDescription(poetInfo)}
        />
      </Card>
      <div className="tw-grid-cols-2 tw-gap-2 tw-grid">
        {data.poetOrCat?.cat?.children?.map((child: CatChild) => (
          <Link key={child.id} href={child.fullUrl} className="childBook">
            <Button
              className="tw-w-full tw-h-full tw-bg-red-700 tw-text-sm tw-whitespace-pre-line"
              type="primary"
            >
              {child.title}
            </Button>
          </Link>
        ))}
      </div>
      {data.poetOrCat?.cat?.poems?.map((child: CatPoem) => (
        <Link key={child.id} href={child.urlSlug}>
          <Button
            className="tw-w-full tw-h-full tw-border-red-700 tw-text-red-700 tw-mt-3 tw-text-sm tw-whitespace-pre-line"
            type="default"
          >
            {child.title}
          </Button>
        </Link>
      ))}
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
      className="tw-flex tw-flex-col tw-gap-1 tw-text-[11px] tw-font-danaSB"
    >
      {getLabel(property)}:
      <span className="tw-font-danaR tw-text-[10px]">{poetInfo[property]}</span>
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
      className="max-md:tw-w-20 md:tw-w-22 max-sm:-tw-translate-x-2 max-sm:-tw-translate-y-2"
      alt="poet picture"
    />
  );
}

function getDescription(poetInfo?: PoetInfo) {
  return (
    <Paragraph
      className="tw-text-current tw-text-[12px] tw-font-danaL tw-leading-5"
      ellipsis={{ rows: 3, expandable: true, symbol: "بیشتر" }}
    >
      {poetInfo?.description}
    </Paragraph>
  );
}

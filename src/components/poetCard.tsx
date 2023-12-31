import { catChild, catPoem, poem, poetInfo } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default function PoetCard({
  data,
}: {
  data: poem;
  params: string | undefined;
}) {
  const poetInfo: poetInfo | undefined = data?.poetOrCat?.poet;
  return (
    <>
      <div className="max-md:hidden">
        <div className="flex flex-col bg-background items-center text-center gap-5 p-5 w-full rounded-lg">
          <img
            src={
              poetInfo?.imageUrl
                ? `https://api.ganjoor.net${poetInfo.imageUrl}`
                : ""
            }
            width={120}
            height={120}
            alt={poetInfo?.name}
          />

          <h1>{poetInfo?.name}</h1>
          <h4 className="text-justify text-xs leading-6 opacity-70">
            {poetInfo?.description}
          </h4>

          <div className="flex justify-between py-4 border-t w-full">
            {getCardInfos(poetInfo)}
          </div>
        </div>
        <div className="columns-auto gap-2">
          {data.poetOrCat?.cat?.children?.map((child: catChild) => (
            <Link key={child.id} href={child.fullUrl} className="childBook">
              <Button className="w-full h-full text-sm whitespace-pre-line my-2">
                {child.title}
              </Button>
            </Link>
          ))}
        </div>
        {data.poetOrCat?.cat?.poems?.map((child: catPoem) => (
          <Link key={child.id} href={child.urlSlug}>
            <Button
              className="w-full h-full border border-primary my-2 text-sm whitespace-pre-line"
              variant="link"
            >
              {child.title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="md:hidden ">
        <Drawer>
          <DrawerTrigger className="flex w-full items-center px-5 py-2 rounded-lg justify-between bg-background border">
            <p>مشاهده اطلاعات شاعر</p>
            <QuestionMarkCircledIcon className="h-[1.2rem] w-[1.2rem]" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col bg-background items-center text-center gap-5 p-5 w-full rounded-lg h-[400px] overflow-y-scroll">
              <img
                src={
                  poetInfo?.imageUrl
                    ? `https://api.ganjoor.net${poetInfo.imageUrl}`
                    : ""
                }
                width={120}
                height={120}
                alt={poetInfo?.name}
              />

              <h1>{poetInfo?.name}</h1>
              <h4 className="text-justify text-xs leading-6 opacity-70">
                {poetInfo?.description}
              </h4>

              <div className="flex justify-between py-4 border-t w-full">
                {getCardInfos(poetInfo)}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

function getCardInfos(poetInfo?: poetInfo) {
  if (!poetInfo) return [];

  const commonProperties: (keyof poetInfo)[] = [
    "birthPlace",
    "birthYearInLHijri",
    "deathPlace",
    "deathYearInLHijri",
  ];
  return commonProperties.map((property) => (
    <div
      className={`flex flex-col items-center text-center w-[25%] ${
        property === "deathYearInLHijri" ? "" : "border-l"
      } `}
    >
      <p
        key={property}
        className="flex flex-col gap-1 w-full text-[10px] opacity-70 mx-3"
      >
        {getLabel(property)}:
        <span className="font-yekanLight text-[10px]">
          {poetInfo[property] ? poetInfo[property] : "نامشخص"}
        </span>
      </p>
    </div>
  ));
}

function getLabel(property: keyof poetInfo) {
  const labels: Record<string, string> = {
    birthPlace: "تولد",
    birthYearInLHijri: "تاریخ تولد",
    deathPlace: "وفات",
    deathYearInLHijri: "تاریخ وفات",
  };
  return labels[property];
}

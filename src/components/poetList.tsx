import { poetList } from "@/lib/types";
import Link from "next/link";

export default function PoetList({
  imageUrl,
  name,
  birthPlace,
  deathPlace,
  fullUrl,
  birthYearInLHijri,
  isSticky = false,
}: poetList) {
  return (
    <>
      <Link href={fullUrl}>
        <div
          className={` ${
            isSticky && "sticky top-[75px]"
          } border drop-shadow-lg rounded-lg bg-background h-full mb-5 relative`}
        >
          <div className="flex flex-col gap-3 h-full justify-between">
            <div className="flex flex-col text-center gap-3 items-center p-3 ">
              <img
                src={`https://api.ganjoor.net${imageUrl}`}
                width={100}
                height={100}
                alt={name}
              />
              <h1 className="font-yekanBold text-sm w-full h-1">{name}</h1>
            </div>
            <div className="flex justify-evenly py-4 border-t">
              <p className="flex flex-col gap-3 text-xs border-l pl-4 ">
                تولد
                <span className="font-yekanLight text-[10px] opacity-80 dark:text-white text-black">
                  {birthPlace ? birthPlace : "نامشخص"}
                </span>
              </p>
              <p className="flex flex-col gap-3 text-xs border-l pl-4 ">
                وفات
                <span className="font-yekanLight text-[10px] opacity-80 dark:text-white text-black">
                  {deathPlace ? deathPlace : "نامشخص"}
                </span>
              </p>
              <p className="flex flex-col gap-3 text-xs ">
                قرن
                <span className="font-yekanLight text-[10px] opacity-80 dark:text-white text-black">
                  {Math.ceil(birthYearInLHijri / 100)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-md translate-x-1 -translate-y-1 bg-gradient-to-br from-orange-800 via-orange-400 to-orange-800 -z-10 dark:opacity-80" />
      </Link>
    </>
  );
}

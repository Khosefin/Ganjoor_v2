import { location } from "@/lib/types";
import Link from "next/link";

export default function Location({ location }: { location: Array<location> }) {
  return (
    <div
      className="w-full mb-3 h-full py-2 px-3 border drop-shadow-sm rounded-lg bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/30 flex items-center gap-2
  "
    >
      {location.map((obj) => (
        <Link href={obj.href} replace={true} className="flex items-center gap-2" key={obj.name}>
          {obj?.icon}
          <p className="max-md:text-xs max-sm:text-[13px] whitespace-nowrap">{obj.name}</p>/
        </Link>
      ))}
    </div>
  );
}

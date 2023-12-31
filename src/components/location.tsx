import { location } from "@/lib/types";
import Link from "next/link";

export default function Location({ location }: { location: Array<location> }) {
  return (
    <div
      className="w-full mb-3 h-full py-2 px-3 border drop-shadow-sm rounded-lg bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/30 flex items-center gap-2
  "
    >
      {location.map((obj) => (
        <Link href={obj.href} className="flex items-center gap-2">
          {obj?.icon}
          <p>{obj.name}</p>/
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";

export default function Logo({ span }: { span: boolean }) {
  return (
    <Link href="/home">
      <div className="flex gap-2 items-center justify-center max-lg:ml-20">
        <div className="sm:border-l sm:pl-2">
          <img src="/images/gdap.png" className="w-10" alt="Logo" />
        </div>
        <p className="font-yekanXBold sm:text-3xl text-2xl">
          گنجور
          {span && (
            <span className="font-yekanLight text-[9px] pr-1 absolute translate-y-2 ">
              دردانه های ادب پارسی
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

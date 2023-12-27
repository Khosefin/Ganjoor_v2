import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <div className="tw-flex tw-gap-1 tw-items-center max-lg:tw-ml-20">
      <div className="tw-border-l-[1px] tw-pl-1">
        <img
          src="/gdap.png"
          className="tw-w-8 sm:tw-w-12"
          alt="Logo"
          onClick={() => router.push("/")}
        />
      </div>
      <p className="tw-font-morabbaB sm:tw-text-3xl tw-text-xl">
        گنجور
        <span className="tw-font-danaL sm:tw-text-[12px] tw-text-[9px] tw-pr-1 tw-absolute tw-translate-y-2 ">
          دردانه های ادب پارسی
        </span>
      </p>
    </div>
  );
}

"use client";

import { SlArrowDown } from "react-icons/sl";
import { BsMoon } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div
        className={cn(
          "z-50 bg-white flex items-center justify-between mb-5 px-12 h-[110px] shadow-sm top-0 sticky"
        )}
      >
        <div className="flex gap-8 items-center text-xl">
          <div className="border-l-[2px] pl-7">
            <Image src="/gdap.png" height="65" width="65" alt="Logo" />
          </div>
          <div className="flex items-center gap-3">
            <p>شاعران پر مخاطب</p>
            <div className="text-xs">
              <SlArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p>شاعر ها</p>
            <div className="text-xs">
              <SlArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p>قرن ها</p>
            <div className="text-xs">
              <SlArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p>درباره ی ما</p>
            <div className="text-xs">
              <SlArrowDown />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="ghost" className="text-2xl -ml-7">
            <BsMoon />
          </Button>
          <Button
            variant="secondary"
            size="secondary"
            className="relative right-14 text-lg"
          >
            ورود
          </Button>
          <Button className="z-50 relative text-lg">عضویت</Button>
        </div>
      </div>
    </>
  );
}

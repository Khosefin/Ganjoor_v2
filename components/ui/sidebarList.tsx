"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Collapse } from "@chakra-ui/transition";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface params {
  listItem?: string[];
  header: string;
}

export default function SidebarList<ReactNode>({ listItem, header }: params) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openListHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div
        className="flex justify-between items-center border-b-[1px] px-4 py-2 cursor-pointer"
        onClick={openListHandler}
      >
        <h1 className="text-lg font-danaR">{header}</h1>
        <ChevronDownIcon className={cn("hidden", isOpen && "block")} />
        <ChevronUpIcon className={cn(isOpen && "hidden")} />
      </div>
      <Collapse in={isOpen} animateOpacity>
        <div className="flex items-center bg-slate-100 gap-2 m-3 rounded-md h-10">
          <input
            type="text"
            className="bg-slate-100 w-full h-full rounded-md pr-2"
            placeholder={`جستجوی ${header} ...`}
          />
          <div className="mx-3 text-xl text-slate-500">
            <MagnifyingGlassIcon />
          </div>
        </div>
        {listItem && (
          <div className="scrollbar overflow-y-scroll border-t-[1px] p-4 flex flex-col gap-1 max-h-56 rounded-md">
            {listItem.map((item) => {
              return (
                <div key={item} className="items-center flex gap-2">
                  <input type="checkbox" />
                  <label className="w-full">{item}</label>
                </div>
              );
            })}
          </div>
        )}
      </Collapse>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Collapse } from "@chakra-ui/transition";

import { useEffect, useState } from "react";
import SidebarList from "./ui/sidebarList";

export default function Sidebar<ReactNode>() {
  const [Poets, setPoets] = useState<string[]>([]);
  const [Periods, setPeriods] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const newPoets = [];
    const newPeriods = [];
    for (let i = 0; i < 20; i++) {
      newPoets.push(`فردوسی ${i + 1}`);
    }
    for (let i = 0; i < 10; i++) {
      newPeriods.push(`دوره ${i + 1}`);
    }
    setPoets(newPoets);
    setPeriods(newPeriods);
  }, []);

  const openListHandler = () => {
    setIsOpen(!isOpen);
    console.log("opened");
  };

  return (
    <div className="z-40 flex flex-col h-full sticky -top-32 w-64 gap-4">
      <div className="bg-white shadow-md rounded-lg">
        <h1 className="border-b-[1px] px-4 py-2 text-lg font-danaR">جستجو</h1>
        <div className="flex items-center bg-slate-100 gap-2 m-3 rounded-md h-10">
          <input
            type="text"
            className="bg-slate-100 w-full h-full rounded-md pr-2"
            placeholder="عنوان و شاعر ..."
          />
          <div className="mx-3 text-xl text-slate-500">
            <MagnifyingGlassIcon />
          </div>
        </div>
      </div>
      <SidebarList listItem={Poets} header="شاعران" />
      <SidebarList listItem={Periods} header="دوره ها" />
    </div>
  );
}

"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { setCenturyFilter, setPoetsFilter } from "@/redux/slice";
import { Drawer } from "./ui/drawer";
import { DrawerContent, DrawerFooter, DrawerTrigger } from "./ui/drawer";

export default function Sidebar() {
  const [poets] = useState<string[]>(["متاسفانه هنوزی کتاب تعریف نشده :("]);
  const [poetSearch, setPoetSearch] = useState<string>();
  const [century, setCentury] = useState<number | null>(null);
  const dispatch = useDispatch();

  return (
    <>
      {/* tablet and laptop view */}
      <div className="z-40 flex flex-col h-full sticky top-[75px] w-72 gap-4 max-md:hidden mb-5 text-start">
        <div className="border drop-shadow-sm rounded-lg bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/30">
          <h1 className="border-b px-4 py-2 text-lg font-danaR">جستجو</h1>
          <div className="flex items-center dark:inputBg gap-2 m-3 pl-1 rounded-md h-10 bg-slate-100 ">
            <input
              type="text"
              className=" w-full h-full pr-2 divBg rounded-md "
              placeholder="جستجوی سخنور"
              onChange={(e) => {
                setPoetSearch(e.target.value);
              }}
              value={poetSearch}
            />
            <Button
              variant="link"
              size="icon"
              onClick={() => {
                if (poetSearch) dispatch(setPoetsFilter(poetSearch.trim()));
              }}
            >
              <MagnifyingGlassIcon className="h-[1.6rem] w-[1.6rem]" />
            </Button>
          </div>
        </div>
        <div className="border drop-shadow-sm rounded-lg bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/30">
          <h1 className="border-b px-4 py-2 text-lg font-danaR">کتاب ها</h1>
          <div className="flex items-center dark:inputBg gap-2 m-3 pl-1 rounded-md h-10  bg-slate-100">
            <input
              type="text"
              className=" w-full h-full pr-2 rounded-md divBg"
              placeholder="جستجوی کتاب"
            />
            <Button variant="link" size="icon">
              <MagnifyingGlassIcon className="h-[1.6rem] w-[1.6rem]" />
            </Button>
          </div>
        </div>
        <div className="border drop-shadow-sm rounded-lg bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/30">
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <h1 className="text-lg font-danaR">قرن</h1>
            <p className="opacity-50">
              {century ? (century === 14 ? "معاصر" : century) : "(همه)"}
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-b-xl p-4 ">
            <Slider
              min={3}
              max={14}
              defaultValue={century ? [century] : [14]}
              value={century ? [century] : [14]}
              onValueChange={(e) => setCentury(e[0])}
            />
            <div className="flex justify-between text-xs font-yekanThin ">
              <p>معاصر</p>
              <p>قرن 3</p>
            </div>
          </div>
        </div>
        <div className="flex gap-1 w-full">
          <Button
            onClick={() => {
              setPoetSearch("");
              setCentury(null);
              dispatch(setCenturyFilter(""));
              dispatch(setPoetsFilter(null));
            }}
            size="icon"
            variant="link"
            className="border border-primary p-2"
          >
            <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            onClick={() => {
              if (century || poetSearch) {
                setPoetSearch("");
                dispatch(setCenturyFilter(century));
                dispatch(setPoetsFilter(poetSearch));
              }
            }}
            className="w-full"
          >
            اعمال محدودیت
          </Button>
        </div>
      </div>
      {/*end tablet and laptop view */}
      <div className="md:hidden ">
        <Drawer>
          <DrawerTrigger className="flex w-full items-center px-5 py-2 rounded-lg justify-between bg-background border">
            <p>محدود سازی</p>
            <MixerHorizontalIcon className="h-[1.2rem] w-[1.2rem]" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col gap-4 m-7">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="name"
                  className="text-right whitespace-nowrap w-16"
                >
                  سخنوران :
                </Label>
                <div className="w-full dark:inputBg rounded-md h-10 bg-slate-100">
                  <input
                    type="text"
                    className=" w-full h-full pr-2 divBg rounded-md "
                    placeholder="جستجوی سخنور"
                    onChange={(e) => {
                      setPoetSearch(e.target.value);
                    }}
                    value={poetSearch}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-4 w-full">
                  <Label
                    htmlFor="name"
                    className="text-right whitespace-nowrap w-[100px]"
                  >
                    کتاب ها :
                  </Label>
                  <div className="w-full dark:inputBg rounded-md h-10 bg-slate-100">
                    <input
                      type="text"
                      className="w-full h-full pr-2 divBg rounded-md "
                      placeholder="جستجوی کتاب"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right whitespace-nowrap"
                    >
                      قرن :
                    </Label>
                    <input
                      type="number"
                      className="h-10 w-20 pr-2 divBg rounded-md"
                      placeholder="همه"
                      min={3}
                      max={14}
                      onChange={(e) => setCentury(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <div className="flex gap-1 w-full">
                <Button
                  onClick={() => {
                    setPoetSearch("");
                    dispatch(setCenturyFilter(""));
                    dispatch(setPoetsFilter(null));
                  }}
                  size="icon"
                  variant="link"
                  className="border border-primary p-2"
                >
                  <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
                <Button
                  onClick={() => {
                    setPoetSearch("");
                    dispatch(setCenturyFilter(century));
                    dispatch(setPoetsFilter(poetSearch));
                  }}
                  className="w-full"
                >
                  اعمال محدودیت
                </Button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

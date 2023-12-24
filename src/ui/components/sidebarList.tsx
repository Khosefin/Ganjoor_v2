"use client";

import { Params } from "@/lib/types";
import { Collapse } from "@chakra-ui/transition";
import { useState } from "react";

export default function SidebarList({
  listItem,
  header,
}: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const inputPlaceholder = `جستجوی ${header} ...`;
  const transitionDuration = 0.2;

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setTimeout(() => setIsOpen(false), 3000);

  return (
    <>
      <div className="tw-bg-white tw-drop-shadow-sm tw-rounded-lg">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-[1px] tw-px-4 tw-py-2 tw-cursor-pointer">
          <h1 className="tw-text-lg tw-font-danaR">{header}</h1>
        </div>

        <div className="tw-flex tw-items-center tw-bg-[#fafafa] tw-gap-2 tw-m-3 tw-rounded-lg tw-h-10">
          <input
            type="text"
            className="tw-bg-[#fafafa] tw-w-full tw-h-full tw-rounded-md tw-pr-2"
            placeholder={inputPlaceholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <Collapse in={isOpen} transition={{ exit: { duration: transitionDuration }, enter: { duration: transitionDuration } }}>
          {listItem && (
            <div className="scrollbar tw-overflow-y-scroll tw-border-t-[1px] tw-p-4 tw-flex tw-flex-col tw-gap-1 tw-max-h-56 tw-rounded-md">
              {listItem.map((item, index) => (
                <div key={index} className="tw-items-center tw-flex tw-gap-2 tw-cursor-pointer">
                  <label className="tw-flex tw-gap-3 tw-align-bottom">
                    <input type="checkbox" />
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </Collapse>
      </div>
    </>
  );
}
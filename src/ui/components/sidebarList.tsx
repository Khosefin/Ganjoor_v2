"use client";

import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "@chakra-ui/transition";
import { Button } from "antd";
import { useState } from "react";

interface params {
  listItem?: string[];
  header: string;
  defaultValue?: boolean;
}

export default function SidebarList({
  listItem,
  header,
  defaultValue = false,
}: params) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  return (
    <div className="tw-bg-white tw-drop-shadow-sm tw-rounded-lg">
      <div
        className="tw-flex tw-justify-between tw-items-center tw-border-b-[1px] tw-px-4 tw-py-2 tw-cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="tw-text-lg tw-font-danaR">{header}</h1>
        <Button
          type="text"
          size="small"
          shape="circle"
          className={`tw-text-red-900 ${isOpen && "tw-rotate-180"}`}
          icon={<DownOutlined />}
        />
      </div>
      <Collapse
        in={isOpen}
        transition={{ exit: { duration: 0.2 }, enter: { duration: 0.2 } }}
      >
        <div className="tw-flex tw-items-center tw-bg-[#fafafa] tw-gap-2 tw-m-3 tw-rounded-lg tw-h-10">
          <input
            type="text"
            className="tw-bg-[#fafafa] tw-w-full tw-h-full tw-rounded-md tw-pr-2"
            placeholder={`جستجوی ${header} ...`}
          />
          <div className="tw-mx-3 tw-text-xl tw-text-slate-500"></div>
        </div>
        {listItem && (
          <div className="scrollbar tw-overflow-y-scroll tw-border-t-[1px] tw-p-4 tw-flex tw-flex-col tw-gap-1 tw-max-h-56 tw-rounded-md">
            {listItem.map((item) => {
              return (
                <div
                  key={item}
                  className="tw-items-center tw-flex tw-gap-2 tw-cursor-pointer"
                >
                  <input type="checkbox" placeholder={item} />
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </Collapse>
    </div>
  );
}

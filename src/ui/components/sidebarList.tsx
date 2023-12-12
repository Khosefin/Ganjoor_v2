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
    <div className="bg-white drop-shadow-sm rounded-lg">
      <div
        className="flex justify-between items-center border-b-[1px] px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-lg font-danaR">{header}</h1>
        <Button
          type="text"
          size="small"
          shape="circle"
          className={`text-red-900 ${isOpen && "rotate-180"}`}
          icon={<DownOutlined />}
        />
      </div>
      <Collapse
        in={isOpen}
        transition={{ exit: { duration: 0.2 }, enter: { duration: 0.2 } }}
      >
        <div className="flex items-center bg-[#fafafa] gap-2 m-3 rounded-lg h-10">
          <input
            type="text"
            className="bg-[#fafafa] w-full h-full rounded-md pr-2"
            placeholder={`جستجوی ${header} ...`}
          />
          <div className="mx-3 text-xl text-slate-500"></div>
        </div>
        {listItem && (
          <div className="scrollbar overflow-y-scroll border-t-[1px] p-4 flex flex-col gap-1 max-h-56 rounded-md">
            {listItem.map((item) => {
              return (
                <div
                  key={item}
                  className="items-center flex gap-2 cursor-pointer"
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

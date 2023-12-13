"use client";

import { useState } from "react";
import SidebarList from "./sidebarList";
import { Button, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { SliderMarks } from "antd/es/slider";

export default function Sidebar() {
  const [Poets, setPoets] = useState<string[]>([
    "بوستان",
    "گلستان",
    "شاهنامه",
    " گنجینه اشعار ",
    "قایقی خواهم ساخت",
    "مشاهیر",
    "ملک الشعرای بهار",
    "بوستان گلستان",
  ]);

  const marks: SliderMarks = {
    3: {
      style: {
        fontSize: 12,
      },
      label: "قرن 3",
    },
    14: {
      style: {
        fontSize: 12,
      },
      label: "معاصر",
    },
  };

  return (
    <div className="tw-z-40 tw-flex tw-flex-col tw-h-full tw-sticky tw-top-20 tw-w-64 tw-gap-4">
      <div className="tw-bg-white tw-drop-shadow-sm tw-rounded-lg">
        <h1 className="tw-border-b-[1px] tw-px-4 tw-py-2 tw-text-lg tw-font-danaR">
          جستجو
        </h1>
        <div className="tw-flex tw-items-center tw-bg-[] tw-gap-2 tw-m-3 tw-pl-1 tw-rounded-md tw-h-10 tw-bg-[#fafafa]">
          <input
            type="text"
            className="tw-bg-[#fafafa] tw-w-full tw-h-full tw-rounded-md tw-pr-2"
            placeholder="جستجوی سخنور"
          />
          <Button
            type="text"
            className="tw-text-red-900"
            icon={<SearchOutlined />}
          />
        </div>
      </div>
      <div className="tw-bg-white tw-drop-shadow-sm tw-rounded-lg">
        <h1 className="tw-border-b-[1px] tw-px-4 tw-py-2 tw-text-lg tw-font-danaR">
          دسته بندی قرن ها
        </h1>
        <div className="tw-h-10 tw-bg-[#fafafa] tw-px-5">
          <Slider range marks={marks} min={3} max={14} defaultValue={[5, 12]} />
        </div>
      </div>
      <SidebarList listItem={Poets} header="کتاب ها" defaultValue={true} />
    </div>
  );
}

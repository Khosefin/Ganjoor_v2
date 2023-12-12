"use client";

import { useEffect, useState } from "react";
import SidebarList from "./sidebarList";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Sidebar<ReactNode>() {
  const [Poets, setPoets] = useState<string[]>([]);

  useEffect(() => {
    const newPoets = [];

    for (let i = 0; i < 20; i++) {
      newPoets.push(`فردوسی ${i + 1}`);
    }

    setPoets(newPoets);
  }, []);

  return (
    <div className="z-40 flex flex-col h-full sticky -top-32 w-64 gap-4">
      <div className="bg-white drop-shadow-sm rounded-lg">
        <h1 className="border-b-[1px] px-4 py-2 text-lg font-danaR">جستجو</h1>
        <div className="flex items-center bg-[] gap-2 m-3 pl-1 rounded-md h-10 bg-[#fafafa]">
          <input
            type="text"
            className="bg-[#fafafa] w-full h-full rounded-md pr-2"
            placeholder="جستجوی سخنور"
          />
          <Button
            type="text"
            className="text-red-900"
            icon={<SearchOutlined />}
          />
        </div>
      </div>
      <SidebarList header="دوره ها" />
      <SidebarList listItem={Poets} header="کتاب ها" defaultValue={true} />
    </div>
  );
}

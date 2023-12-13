"use client";

import Image from "next/image";
import { Button, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Logo = () => (
  <div className="border-l-[1px] pl-2">
    <Image src='/gdap.png' height="45" width="45" alt="Logo" />
  </div>
);

const NavbarTitle = () => (
  <p className="font-morabbaB text-3xl">
    گنجور <span className="font-danaL text-sm pr-1">دردانه های ادب پارسی</span>
  </p>
);

const NavbarButtons = () => (
  <div className="flex items-center gap-1">
    <Tooltip title="info">
      <Button
        type="text"
        shape="circle"
        className="text-red-900"
        icon={<InfoCircleOutlined />}
      />
    </Tooltip>
    <Button type="text" className="bugB text-red-700">
      ورود
    </Button>
    <Button type="primary" className="bg-red-700 text-white bugB">
      نام نویسی
    </Button>
  </div>
);

const SearchBox = () => (
  <div className="border border-[#d9d9d9] h-8 w-3/12 rounded-full bg-[#fafafa] flex items-center">
    <input
      type="text"
      className="rounded-full w-full bg-[#fafafa] px-2 text-sm"
      placeholder="جستجوی ابیات ..."
    />
    <Button type="text" size="small" shape="circle" className="text-red-900" icon={<SearchOutlined />} />
  </div>
);

export default function Navbar() {
  return (
    <>
      <div className="z-50 bg-white flex items-center justify-between mb-5 p-5 h-16 shadow-sm top-0 sticky">
        <div className="flex gap-3 items-center -ml-20">
          <Logo />
          <NavbarTitle />
        </div>
        <SearchBox />
        <NavbarButtons />
      </div>
    </>
  );
}

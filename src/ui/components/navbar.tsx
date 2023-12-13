"use client";

import Image from "next/image";
import { Button, Tooltip } from "antd";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";

const Logo = () => (
  <div className="tw-border-l-[1px] tw-pl-2">
    <Image src="/gdap.png" height="45" width="45" alt="Logo" />
  </div>
);

const NavbarTitle = () => (
  <p className="tw-font-morabbaB tw-text-3xl">
    گنجور{" "}
    <span className="tw-font-danaL tw-text-sm tw-pr-1">
      دردانه های ادب پارسی
    </span>
  </p>
);

const NavbarButtons = () => (
  <div className="tw-flex tw-items-center tw-gap-1">
    <Tooltip title="info">
      <Button
        type="text"
        shape="circle"
        className="tw-text-red-900"
        icon={<InfoCircleOutlined />}
      />
    </Tooltip>
    <Button type="text" className="tw-h-10 tw-text-red-700">
      ورود
    </Button>
    <Button type="primary" className="tw-bg-red-700 tw-text-white tw-h-10">
      نام نویسی
    </Button>
  </div>
);

const SearchBox = () => (
  <div className="tw-border tw-border-[#d9d9d9] tw-h-8 tw-w-3/12 tw-rounded-full tw-bg-[#fafafa] tw-flex tw-items-center">
    <input
      type="text"
      className="tw-rounded-full tw-w-full tw-bg-[#fafafa] tw-px-2 tw-text-sm"
      placeholder="جستجوی ابیات ..."
    />
    <Button
      type="text"
      size="small"
      shape="circle"
      className="tw-text-red-900"
      icon={<SearchOutlined />}
    />
  </div>
);

export default function Navbar() {
  return (
    <>
      <div className="tw-z-50 tw-bg-white tw-flex tw-items-center tw-justify-between tw-mb-5 tw-p-5 tw-h-16 tw-shadow-sm tw-top-0 tw-sticky">
        <div className="tw-flex tw-gap-3 tw-items-center -tw-ml-20">
          <Logo />
          <NavbarTitle />
        </div>
        <SearchBox />
        <NavbarButtons />
      </div>
    </>
  );
}

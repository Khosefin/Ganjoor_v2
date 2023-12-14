"use client";

import type { MenuProps } from "antd";
import { Button, Dropdown, DropdownProps, Space, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchMenu: MenuProps["items"] = [
    {
      label: (
        <div className="tw-border tw-border-[#d9d9d9] tw-h-8 tw-rounded-xl tw-bg-[#fafafa] tw-flex tw-items-center tw-shadow-2xl">
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
      ),
      key: "1",
    },
  ];

  const userMenu: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
        >
          ورود
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button type="default" className="tw-w-36 tw-h-10 ">
          نام نویسی
        </Button>
      ),
    },
  ];

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setIsModalOpen(nextOpen);
    }
  };

  return (
    <>
      <div className="tw-z-50 tw-bg-white tw-flex tw-justify-between tw-mb-5 tw-p-4 tw-h-16 tw-shadow-sm tw-top-0 tw-sticky tw-w-full">
        <div className="tw-flex tw-gap-1 tw-items-center max-lg:tw-ml-20">
          {/* <Logo /> */}
          <div className="tw-border-l-[1px] tw-pl-1">
            <img src="/gdap.png" className="tw-w-8 sm:tw-w-12" alt="Logo" />
          </div>
          {/* <NavbarTitle /> */}
          <p className="tw-font-morabbaB sm:tw-text-3xl tw-text-xl">
            گنجور{" "}
            <span className="tw-font-danaL sm:tw-text-[12px] tw-text-[9px] tw-pr-1 tw-absolute tw-translate-y-2 ">
              دردانه های ادب پارسی
            </span>
          </p>
        </div>
        {/* <SearchBox /> */}
        <div className="tw-border tw-border-[#d9d9d9] tw-h-8 tw-w-4/12 tw-rounded-full tw-bg-[#fafafa] tw-flex tw-items-center max-md:tw-hidden">
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
        {/* <NavbarButtons /> */}
        <div>
          <div className="tw-flex tw-items-center tw-gap-1 max-md:tw-hidden">
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
            <Button
              type="primary"
              className="tw-bg-red-700 tw-text-white tw-h-10"
            >
              نام نویسی
            </Button>
          </div>
          <div className="tw-flex tw-gap-3 md:tw-hidden">
            <Dropdown
              menu={{ items: searchMenu }}
              onOpenChange={handleOpenChange}
              open={isModalOpen}
              trigger={["click"]}
              arrow
            >
              <Space>
                <Button
                  type="primary"
                  onClick={() => setIsModalOpen(true)}
                  icon={<SearchOutlined />}
                />
              </Space>
            </Dropdown>

            <Dropdown
              menu={{ items: userMenu }}
              trigger={["click"]}
              placement="bottomLeft"
              arrow
            >
              <Button
                className="tw-text-red-700 tw-border-red-700"
                icon={<UserOutlined />}
                onClick={() => setOpen(true)}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}

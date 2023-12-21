"use client";

import { MouseEventHandler, useState } from "react";
import { Button, FloatButton, Modal, Slider } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import type { SliderMarks } from "antd/es/slider";
import SidebarList from "./sidebarList";

export default function Sidebar() {
  const [poets] = useState<string[]>([
    "بوستان",
    "گلستان",
    "شاهنامه",
    " گنجینه اشعار ",
    "قایقی خواهم ساخت",
    "مشاهیر",
    "ملک الشعرای بهار",
    "بوستان گلستان",
  ]);
  const [open, setOpen] = useState(false);

  const marks: SliderMarks = {
    3: { style: { fontSize: 12 }, label: "قرن 3" },
    14: { style: { fontSize: 12 }, label: "معاصر" },
  };

  const showModal = () => setOpen(true);
  const handleOk: MouseEventHandler<HTMLElement> = () => setOpen(false);
  const handleCancel = () => setOpen(false);

  return (
    <>
      <div className="tw-z-40 tw-flex tw-flex-col tw-h-full tw-sticky tw-top-[75px] tw-w-64 tw-gap-4 max-md:tw-hidden tw-mb-5">
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
            <Slider marks={marks} min={3} max={14} defaultValue={3} range />
          </div>
        </div>
        <SidebarList listItem={poets} header="کتاب ها" />
      </div>
      <div className="md:tw-hidden">
        <div className="tw-flex bh">
          <Button
            onClick={showModal}
            className="tw-w-full tw-h-10 tw-items-center tw-flex tw-justify-between"
          >
            <p>محدودسازی</p>
            <MenuOutlined />
          </Button>
        </div>
        <Modal
          open={open}
          onCancel={handleCancel}
          cancelText="لفو"
          okText="تایید"
          footer={modalbutton(handleOk as never)}
        >
          <div className="tw-flex tw-flex-col tw-gap-5">
            <div className="tw-bg-[#f2f2f2] tw-drop-shadow-sm tw-rounded-lg tw-flex tw-items-center tw-justify-between tw-mt-7">
              <h1 className="tw-px-4 tw-py-2 tw-text-lg tw-font-danaR">
                سخنور:
              </h1>
              <div className="tw-flex tw-items-center tw-gap-2 tw-m-3 tw-pl-1 tw-rounded-md tw-bg-[#f2f2f2] tw-w-full tw-border-[1px] tw-border-red-700 tw-h-10">
                <input
                  type="text"
                  className="tw-bg-[#f2f2f2] tw-w-full tw-h-full tw-rounded-md tw-pr-2"
                  placeholder="جستجوی سخنور"
                />
                <Button
                  type="text"
                  className="tw-text-red-900"
                  icon={<SearchOutlined />}
                />
              </div>
            </div>
            <div className="tw-bg-[#f2f2f2] tw-drop-shadow-sm tw-rounded-lg">
              <h1 className="tw-px-4 tw-py-2 tw-text-lg tw-font-danaR tw-items-center tw-text-center">
                دسته بندی قرن ها
              </h1>
              <div className="tw-h-10 tw-bg-[#f2f2f2] tw-px-5 tw-rounded-full">
                <Slider
                  range
                  marks={marks}
                  min={3}
                  max={14}
                  defaultValue={[5, 12]}
                />
              </div>
            </div>
            <div className="tw-bg-[#f2f2f2] tw-drop-shadow-sm tw-rounded-lg tw-flex tw-items-center tw-justify-between">
              <h1 className="tw-px-4 tw-py-2 tw-text-lg tw-font-danaR">
                کتاب:
              </h1>
              <div className="tw-flex tw-items-center tw-gap-2 tw-m-3 tw-pl-1 tw-rounded-md tw-w-full tw-bg-[#f2f2f2]  tw-border-[1px] tw-border-red-700 tw-h-10">
                <input
                  type="text"
                  className="tw-bg-[#f2f2f2] tw-w-full tw-h-full tw-rounded-md tw-pr-2"
                  placeholder="جستجوی کتاب"
                />
                <Button
                  type="text"
                  className="tw-text-red-900"
                  icon={<SearchOutlined />}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <FloatButton.BackTop
        shape="square"
        type="primary"
        style={{ left: 15, bottom: 20 }}
      />
    </>
  );
}

function modalbutton(handleOk: keyof MouseEventHandler<HTMLElement>) {
  return (
    <Button
      type="primary"
      onClick={handleOk}
      className="tw-w-full tw-h-10 tw-text-white tw-border-red-700 tw-shadow-md"
    >
      اعمال کردن
    </Button>
  );
}

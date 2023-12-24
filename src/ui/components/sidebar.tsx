"use client";

import { MouseEventHandler, useState } from "react";
import { Button, FloatButton, Modal, Slider } from "antd";
import { MenuOutlined, SearchOutlined, UndoOutlined } from "@ant-design/icons";
import type { SliderMarks } from "antd/es/slider";
import SidebarList from "./sidebarList";
import { useDispatch } from "react-redux";
import { setCenturyFilter, setPoetsFilter } from "@/redux/slice";

export default function Sidebar() {
  const [poets] = useState<string[]>(["متاسفانه هنوزی کتاب تعریف نشده :("]);
  const [open, setOpen] = useState(false);
  const [poetSearch, setPoetSearch] = useState<string>("");

  const marks: SliderMarks = {
    3: { style: { fontSize: 12 }, label: "قرن 3" },
    14: { style: { fontSize: 12 }, label: "معاصر" },
  };

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  const dispatch = useDispatch();

  return (
    <>
      {/* tablet and laptop view */}
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
              onChange={(e) => {
                dispatch(setPoetsFilter(e.target.value));
                setPoetSearch(e.target.value);
              }}
              value={poetSearch}
            />
            <Button
              type="text"
              className="tw-text-red-900"
              icon={<SearchOutlined />}
              onClick={() => dispatch(setPoetsFilter(poetSearch.trim()))}
            />
          </div>
        </div>
        <div className="tw-bg-white tw-drop-shadow-sm tw-rounded-lg">
          <h1 className="tw-border-b-[1px] tw-px-4 tw-py-2 tw-text-lg tw-font-danaR">
            دسته بندی قرن ها
          </h1>
          <div className="tw-h-10 tw-bg-white tw-rounded-b-xl tw-px-5">
            <Slider
              marks={marks}
              min={3}
              max={14}
              defaultValue={3}
              onChange={(e) => dispatch(setCenturyFilter(e))}
            />
          </div>
        </div>
        <SidebarList listItem={poets} header="کتاب ها" />
        <Button
          type="primary"
          className="tw-text-white tw-w-full"
          icon={<UndoOutlined />}
          onClick={() => {
            setPoetSearch("");
            dispatch(setCenturyFilter(""));
            dispatch(setPoetsFilter(null));
          }}
        >
          حذف محدودیت ها
        </Button>
      </div>
      {/*end tablet and laptop view */}

      {/*  mobile view */}
      <div className="md:tw-hidden">
        <div className="tw-flex">
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
          footer={null}
          closable={false}
        >
          <div className="tw-flex tw-flex-col tw-gap-5 tw-text-center tw-p-5">
            <div className="tw-drop-shadow-sm tw-rounded-lg tw-shadow-inner tw-bg-[#F8F8F8]">
              <h1 className="tw-py-1 tw-text-lg tw-font-danaR">سخنور:</h1>
              <div className=" tw-flex tw-items-center tw-gap-2 tw-m-3 tw-pl-1 tw-rounded-md tw-w-[95%] tw-h-10">
                <input
                  type="text"
                  className="tw-w-full tw-h-full tw-rounded-md tw-pr-2"
                  placeholder="جستجوی سخنور"
                  onChange={(e) => {
                    dispatch(setPoetsFilter(e.target.value));
                    setPoetSearch(e.target.value);
                  }}
                  value={poetSearch}
                />
                <Button
                  type="text"
                  className="tw-text-red-900"
                  icon={<SearchOutlined />}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="tw-shadow-inner tw-rounded-lg tw-text-center tw-bg-[#F8F8F8]">
              <h1 className="tw-px-4 tw-py-2 tw-text-lg tw-font-danaR tw-items-center tw-text-center">
                دسته بندی قرن ها
              </h1>
              <div className="tw-px-5">
                <Slider
                  marks={marks}
                  min={3}
                  max={14}
                  defaultValue={3}
                  onChange={(e) => dispatch(setCenturyFilter(e))}
                />
              </div>
              <Button
                className="tw-text-red-700 tw-border-[1px] tw-border-red-700 tw-w-[85%] tw-m-auto tw-my-3"
                icon={<SearchOutlined />}
              >
                همه ی قرن ها
              </Button>
            </div>
            <div className="tw-drop-shadow-sm tw-rounded-lg tw-shadow-inner tw-bg-[#F8F8F8]">
              <h1 className="tw-py-1 tw-text-lg tw-font-danaR">کتاب:</h1>
              <div className=" tw-flex tw-items-center tw-gap-2 tw-m-3 tw-pl-1 tw-rounded-md tw-w-[95%] tw-h-10">
                <input
                  type="text"
                  className=" tw-w-full tw-h-full tw-rounded-md tw-pr-2"
                  placeholder="جستجوی کتاب"
                />
                <Button
                  type="text"
                  className="tw-text-red-900"
                  icon={<SearchOutlined />}
                />
              </div>
            </div>
            <Button
              type="primary"
              className="tw-text-white tw-w-full"
              icon={<UndoOutlined />}
              onClick={() => {
                setPoetSearch("");
                dispatch(setCenturyFilter(""));
                dispatch(setPoetsFilter(null));
                setOpen(false);
              }}
            >
              حذف محدودیت ها
            </Button>
          </div>
        </Modal>
        {/* tablet and mobile view */}
      </div>
      <FloatButton.BackTop
        shape="square"
        type="primary"
        style={{ left: 15, bottom: 20 }}
      />
    </>
  );
}

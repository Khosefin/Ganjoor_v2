import { PoetInfo } from "@/lib/types";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MobileView() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUserOpen, setIsUserOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const userInfo: object = useSelector((state: any) => state.poets.userInfo);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsModalOpen(false);
      searchHandler();
    }
  };

  const handleOpenSearchChange = (
    nextOpen: boolean,
    info: { source: string }
  ) => {
    if (info.source === "trigger" || nextOpen) {
      setIsModalOpen(nextOpen);
    }
  };

  const handleOpenUserChange = (
    nextOpen: boolean,
    info: { source: string }
  ) => {
    if (info.source === "trigger" || nextOpen) {
      setIsUserOpen(nextOpen);
    }
  };

  const searchHandler = () => {
    if (!!search) {
      router.replace(
        `/search?PageNumber=2&PageSize=7&term=${search}&poetId=0&catId=0`
      );
      setSearch("");
      setIsModalOpen(false);
    }
  };

  const searchMenu = [
    {
      label: (
        <div className="tw-h-8 tw-rounded-xl tw-bg-[#fafafa] tw-flex tw-items-center tw-shadow-2xl">
          <Input
            type="text"
            className="tw-rounded-full tw-w-full tw-bg-[#fafafa] tw-px-2 tw-text-sm"
            placeholder="جستجوی ابیات ..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyDown={handleEnterPress}
          />
          <Button
            type="text"
            size="small"
            shape="circle"
            className="tw-text-red-900"
            icon={<SearchOutlined />}
            onClick={searchHandler}
          />
        </div>
      ),
      key: "1",
    },
  ];

  const userLogin = [
    {
      key: "1",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
          href="/login"
        >
          ورود
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
          href="/login"
        >
          نام‌نویسی
        </Button>
      ),
    },
  ];
  const userMenu = [
    {
      key: "1",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
          href="/login"
        >
          حساب کاربری
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
          href="/login"
        >
          خروج
        </Button>
      ),
    },
  ];

  return (
    <div className="tw-flex tw-gap-3 md:tw-hidden">
      <Dropdown
        menu={{ items: searchMenu }}
        onOpenChange={handleOpenSearchChange}
        open={isModalOpen}
        trigger={["click"]}
        arrow
      >
        <Space>
          <Button
            type="primary"
            className="tw-bg-red-700"
            onClick={() => setIsModalOpen(!isModalOpen)}
            icon={<SearchOutlined />}
          />
        </Space>
      </Dropdown>

      <Dropdown
        menu={userInfo ? { items: userMenu } : { items: userLogin }}
        onOpenChange={handleOpenUserChange}
        open={isUserOpen}
        trigger={["click"]}
        placement="bottomLeft"
        arrow
      >
        <Button
          className="tw-text-red-700 tw-border-red-700"
          icon={<UserOutlined />}
          onClick={() => setIsUserOpen(!isUserOpen)}
        />
      </Dropdown>
    </div>
  );
}

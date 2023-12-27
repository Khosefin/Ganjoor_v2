import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

import MobileView from "./navbar/mobileView";
import Logo from "./logo";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "@/lib/types";
import { SetLogout } from "@/redux/slice";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const userInfo: userInfo = useSelector((state: any) => state.poets.userInfo);

  const items: MenuProps["items"] = [
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
          نشان شده ها
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="default"
          className="tw-w-36 tw-h-10 tw-text-red-700 tw-border-red-700 tw-shadow-md"
          onClick={() => dispatch(SetLogout(true))}
        >
          خروج
        </Button>
      ),
    },
  ];

  const searchHandler = () => {
    if (!!search) {
      router.replace(
        `/search?PageNumber=2&PageSize=7&term=${search}&poetId=0&catId=0`
      );
      setSearch("");
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="tw-z-50 tw-bg-white tw-flex tw-justify-between tw-mb-5 tw-p-4 tw-h-16 tw-shadow-sm tw-top-0 tw-sticky tw-w-full">
      <Logo />
      <div className="tw-border tw-border-[#d9d9d9] tw-h-8 tw-w-4/12 tw-rounded-full tw-bg-[#fafafa] tw-flex tw-items-center max-md:tw-hidden">
        <input
          type="text"
          className="tw-rounded-full tw-w-full tw-bg-[#fafafa] tw-px-3 tw-text-sm"
          placeholder="جستجوی ابیات ..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={handleEnterPress}
        />
        <Button
          type="text"
          size="small"
          shape="circle"
          className="tw-text-red-900 tw-ml-1"
          icon={<SearchOutlined />}
          onClick={searchHandler}
        />
      </div>

      {userInfo ? (
        <Dropdown menu={{ items }} placement="bottomLeft" arrow className="max-md:tw-hidden">
          <Button size="large" icon={<UserOutlined />}>
            {userInfo.user.nickName}
          </Button>
        </Dropdown>
      ) : (
        <div className="tw-flex tw-items-center tw-gap-1 max-md:tw-hidden">
          <Tooltip title="info">
            <Button
              type="text"
              shape="circle"
              className="tw-text-red-900"
              icon={<InfoCircleOutlined />}
            />
          </Tooltip>
          <Button type="text" className="tw-h-10 tw-text-red-700" href="/login">
            ورود
          </Button>
          <Button
            type="primary"
            className="tw-bg-red-700 tw-text-white tw-h-10"
            href="/login"
          >
            نام نویسی
          </Button>
        </div>
      )}
      <MobileView />
    </div>
  );
}

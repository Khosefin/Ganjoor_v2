"use client";
import { useTheme } from "next-themes";
import Logo from "./logo";
import {
  ExitIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

interface NavbarProps {
  user?: any;
}

export default function Navbar({ user }: NavbarProps) {
  const { setTheme, theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (!!search) {
      router.replace(
        `/search?PageNumber=2&PageSize=7&term=${search}&poetId=0&catId=0`
      );
      setSearch("");
    }
  };

  return (
    <div className="z-50 mb-5 max-md:px-2 h-16 shadow-sm top-0 sticky w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="w-[93.5%] max-md:w-[98%] h-full flex justify-between items-center">
        <Logo span />
        {/* lg view */}
        <div className="dark:border-0 border border-[#d9d9d9] dark:inputBg h-8 w-4/12 rounded-lg flex items-center max-md:hidden lg:-translate-x-10">
          <input
            type="text"
            className="rounded-lg w-full h-[95%] px-3 text-sm border-0 shadow-none"
            placeholder="جستجوی ابیات ..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyDown={handleEnterPress}
          />
          <Button variant="link" size="icon" onClick={searchHandler}>
            <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
        <div className="flex items-center gap-1 max-md:hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex gap-2" size="icon">
                  <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link
                    href="/home?error=accessDenied"
                    className="w-full h-full"
                  >
                    <Button
                      variant="outline"
                      className="w-32 border-primary text-primary"
                    >
                      پنل کاربری
                    </Button>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="ghost"
                    className="w-full h-full flex gap-2"
                    onClick={() => {
                      Cookies.remove("userToken");
                      Cookies.remove("userInfo");
                      Cookies.remove("userSessionId");
                      router.refresh();
                    }}
                  >
                    خروج <ExitIcon />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="secondary">ورود</Button>
              </Link>
              <Link href="/signup">
                <Button variant="default">نام نویسی</Button>
              </Link>
            </>
          )}
        </div>
        {/* end lg view */}
        {/* max-md veiw */}
        <div className="flex gap-2 md:hidden">
          {/* search dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MagnifyingGlassIcon className="h-[1.35rem] w-[1.35rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <div className="w-full h-full flex items-center">
                <input
                  type="text"
                  className=" w-full h-full px-3 text-sm bg-background"
                  placeholder="جستجوی ابیات ..."
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  onKeyDown={handleEnterPress}
                />
                <Button variant="link" size="icon" onClick={searchHandler}>
                  <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* user dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <PersonIcon className="h-[1.35rem] w-[1.35rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {user ? (
                <>
                  <DropdownMenuItem>
                    <Link
                      href="/home?error=accessDenied"
                      className="w-full h-full"
                    >
                      <Button
                        className="flex gap-2 border-primary text-primary"
                        variant="outline"
                      >
                        حساب کاربری
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      className="w-full h-full flex gap-2"
                      variant="ghost"
                      onClick={() => {
                        Cookies.remove("userToken");
                        Cookies.remove("userInfo");
                        Cookies.remove("userSessionId");
                        router.refresh();
                      }}
                    >
                      خروج <ExitIcon />
                    </Button>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full h-full">
                      <Button className="w-full h-full">ورود</Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full h-full">
                      <Button className="w-full h-full">نام نویسی</Button>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}

              <DropdownMenuItem
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Button variant="secondary" className="w-full h-full">
                  تغییر تم
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* end max-md veiw */}
      </div>
    </div>
  );
}

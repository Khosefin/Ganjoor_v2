import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "صفحه ورود",
  description: "صفحه ی ورود به حساب کاربری سایت گنجور",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (cookies().has("userToken")) redirect("/home");
  return (
    <>
      <div className="relative h-dvh w-full flex items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 loginBg">
        <div className="lg:p-2">
          <div className="mx-auto flex w-[370px] h-full flex-col justify-center gap-4 sm:w-[420px] bg-background backdrop rounded-xl p-7 shadow-inner relative">
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-2xl font-yekanBold max-sm:text-xl">
                حساب کاربری
              </h1>
              <p className="text-sm text-muted-foreground max-sm:text-xs">
                لطفا اطلاعات خواسته شده را با دقت وارد کنید
              </p>
            </div>
            {children}
            <Link href="/home">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-3 left-3 border border-primary text-primary w-7 h-7"
              >
                <HomeIcon/>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex bg-transparent">
          <div className="absolute inset-0" />
          <div className="relative z-20 mt-auto text-end">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;رستم و سهراب در میدان جنگ به یکدیگر برمی‌خورند. رستم، که
                هویت سهراب را نمی‌شناسد، باور دارد که او یک دشمن است و به دلیل
                وفاداری به ایران، با شمشیر خود سهراب را می‌کشد. اما هنگامی که
                رستم می‌فهمد که سهراب فرزند اوست، افسوس و تأسف به او فرا می‌رسد
                &rdquo;
              </p>
              <footer className="text-sm">داستان شاهنامه</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}

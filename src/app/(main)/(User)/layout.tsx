import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon } from "@radix-ui/react-icons";
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
      <div className="h-dvh w-full flex items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 fixed loginBg">
        <div className="lg:p-2">
          <div className="mx-auto flex w-[370px] h-full flex-col justify-center gap-4 sm:w-[420px] rounded-xl p-7 border-border/40 bg-background/95 backdrop-blur-[10px] supports-[backdrop-filter]:bg-background/85 max-md:shadow-white/20 max-md:shadow-inner">
            {children}
            <Link href="/home" className="translate-y-10 -translate-x-32 -my-7">
              <Button
                variant="link"
                className="w-full font-yekanRegular text-white/90 flex gap-1 mx-auto"
              >
              بازگشت به خانه
                <ArrowLeftIcon/>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex bg-transparent">
          <div className="absolute inset-0" />
          <div className="relative z-20 mt-auto text-end">
            <blockquote className="space-y-2">
              <p className="text-lg text-justify">
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

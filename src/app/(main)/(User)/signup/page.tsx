"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { SignUpAction } from "@/components/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().min(9, {
    message: "ایمیل باید بیشتر از 9 حرف باشد",
  }),
  captchaValue: z.string().length(5, {
    message: "کد امنیتی باید 5 رقم باشد",
  }),
  captchaImageId: z.string(),
});

async function getData() {
  try {
    const response = await axios.get(
      "https://api.ganjoor.net/api/users/captchaimage"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
}

export default function Page() {
  const [captchaData, setCaptchaData] = useState(null);
  const router = useRouter();
  type FormValues = z.infer<typeof FormSchema>;

  const fetchData = async () => {
    try {
      const captcha = await getData();
      setCaptchaData(captcha);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      captchaValue: "",
      captchaImageId: "",
    },
  });

  function onSubmit(data: FormValues) {
    data.captchaImageId = captchaData as any;
    const Formdata = {
      email: data.email,
      clientAppName: "Khosefin",
      language: "farsi",
      captchaImageId: data.captchaImageId,
      captchaValue: data.captchaValue,
      callbackUrl: "string",
    };
    SignUpAction(Formdata).then((data: any) => {
      if (data.result === "Success") {
        router.replace("/signup/submitsignup");
      }
      if (data.result === "Failed") {
        toast.error(`${data.message}`);
        fetchData();
      }
    });
  }

  return (
    <>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-yekanBold max-sm:text-xl"> ساخت حساب کاربری </h1>
        <p className="text-sm text-muted-foreground max-sm:text-xs">
          لطفا ایمیل و کد امنیتی را با دقت وارد کنید
        </p>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="max-sm:text-xs">ایمیل :</FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-[#3B3B3B]"
                        placeholder="ایمیل خود را وارد کنید"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="captchaValue"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="sr-only">کد امنیتی</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input
                          className="dark:bg-[#3B3B3B]"
                          placeholder="کد امنیتی روبرو را وارد کنید"
                          type="number"
                          {...field}
                        />
                        {captchaData && (
                          <img
                            src={`https://api.ganjoor.net/api/rimages/${captchaData}.jpg`}
                            alt="تصویر امنیتی"
                            width={90}
                            height={50}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full max-sm:text-xs my-2">
              ارسال کد تایید
            </Button>
          </form>
        </Form>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className=" px-2 text-muted-foreground">
              اگر از قبل حساب دارید
            </span>
          </div>
        </div>
        <Link href="/login" replace>
          <Button
          variant="secondary"
            className="bg-transparent text-primary border border-primary w-full max-sm:text-xs my-2"
          >
            ورود به حساب کاربری
          </Button>
        </Link>
      </div>
    </>
  );
}

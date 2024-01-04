"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { finalizesignup } from "@/components/actions";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Label } from "@/components/ui/label";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const FormSchema = z
  .object({
    secret: z.string().length(6, {
      message: "کد امنیتی باید 6 رقم باشد",
    }),
    password: z.string().min(6, {
      message: "رمز باید حداقل 5 حرف باشد",
    }),
    confirmPassword: z.string(),
    firstName: z.string().min(1, { message: "لطفا نام خود را وارد کنید" }),
    sureName: z
      .string()
      .min(1, { message: "لطفا نام خانوادگی خود را وارد کنید" }),
    email: z.string(),
  })
  .refine(
    (value) => {
      return value.password === value.confirmPassword;
    },
    {
      message: "رمز یکسان وارد نشده است !",
      path: ["confirmPassword"],
    }
  );
export default function Page() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  type FormValues = z.infer<typeof FormSchema>;
  const router = useRouter();
  const email = Cookies.get("accessCode") as string;
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      secret: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      sureName: "",
      email: "",
    },
  });
  function onSubmit(data: FormValues) {
    const Formdata = {
      email: email,
      secret: data.secret,
      password: data.password,
      firstName: data.firstName,
      sureName: data.sureName,
    };

    finalizesignup(Formdata).then((data: any) => {
      if (data.result === "Success") {
        toast.success(`${data.message}`);
        router.replace("/login");
      }
      if (data.result === "Failed") {
        toast.error(`${data.message}`);
      }
    });
  }
  return (
    <>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-yekanBold max-sm:text-xl">
          تکمیل ساخت حساب کاربری
        </h1>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="secret"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>کد تایید</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="کد تایید"
                      className="dark:bg-[#3B3B3B]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    کد ارسال شده به ایمیل را در اینجا وارد کنید
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-2">
              <Label>ایمیل</Label>
              <Input
                className="dark:bg-[#3B3B3B]"
                value={email ? email : "مشکل در برقراری ارتباط"}
                disabled
              />
            </div>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#3B3B3B]"
                      placeholder="نام خود را وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sureName"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#3B3B3B]"
                      placeholder="نام خانوادگی خود را وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمزعبور</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 rounded-md">
                      <Input
                        placeholder="رمز عبور مورنظر خود را وارد کنید"
                        {...field}
                        type={isShowPassword ? "text" : "password"}
                        className="w-full border-0 dark:bg-[#3B3B3B]"
                      />
                      <Button
                        size="icon"
                        type="button"
                        variant="link"
                        className="border border-primary dark:bg-[#3B3B3B]"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        {isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">تایید رمز عبور</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="رمز عبور خود را تکرار کنید"
                      type="password"
                      {...field}
                      className="dark:bg-[#3B3B3B]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2 w-full">
              تکمیل ثبت نام
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

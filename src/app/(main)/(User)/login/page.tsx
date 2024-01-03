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
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginAction } from "@/components/actions";

const FormSchema = z.object({
  username: z.string().min(1, { message: "لطفا نام کاربری خود را وارد کنید" }),
  password: z.string().min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
});

export default function Page() {
  const router = useRouter();
  type FormValues = z.infer<typeof FormSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: FormValues) {
    const Formdata = {
      username: data.username,
      password: data.password,
      clientAppName: "Khosefin:)",
      language: "farsi",
    };
    console.log(Formdata);
    LoginAction(Formdata).then((data: any) => {
      if (data.result === "Success") {
        toast.success("ورود با موفقیت انجام گرفت");
        router.replace("/home");
      }
      if (data.result === "Failed") {
        toast.error(`${data.message}`);
      }
    });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="max-sm:text-xs">نام کاربری</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#3B3B3B]"
                      placeholder="نام کاربری خود را اینجا وارد کنید"
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
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="max-sm:text-xs">رمز عبور</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-[#3B3B3B]"
                      placeholder="رمز عبور خود را اینجا وارد کنید"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full my-3 max-sm:text-xs">
            ورود
          </Button>
        </form>
      </Form>
      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className=" px-2 text-muted-foreground">
            اگر از قبل حساب ندارید
          </span>
        </div>
      </div>
      <Link href="/signup" replace>
        <Button
          variant="link"
          className=" border border-primary w-full my-3 max-sm:text-xs"
        >
          ساخت حساب کاربری
        </Button>
      </Link>
    </div>
  );
}

"use client";
import { getUser, setRemember } from "@/redux/slice";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector((state: any) => state.poets.loading);
  const isError: string = useSelector((state: any) => state.poets.error);
  const status: string = useSelector((state: any) => state.poets.status);

  const onFinish = () => {
    const user: object = {
      userName,
      password,
      clientAppName: "string",
      language: "string",
    };
    dispatch(getUser(user));
  };


  useEffect(() => {
    if (isError) {
      api.error({
        message: "ورود ناموفق !",
        description: isError,
        placement: "bottomLeft",
        duration: 3,
        closeIcon: null,
      })
    }else if (status === "verified") {
      api.success({
        message: "ورود موفقیت امیز بود",
        description: "درحال انتقال به صفحه ی کاربر ...",
        placement: "bottomLeft",
        duration: 3,
        closeIcon: null,
      })
      setTimeout(() => {
        redirect("/");
      }, 3000);
    }
  }, [isError]);

  return (
    <>
      {contextHolder}
      <div className="tw-flex tw-flex-col tw-p-8 tw-shadow-xl tw-text-center tw-w-[350px] max-sm:tw-h-[400px] tw-bg-white tw-border-2 tw-border-red-700 tw-rounded-xl lg:tw-mr-24">
        <h1 className="tw-font-danaSB tw-text-xl tw-mb-7">صفحه ی ورود</h1>
        <Form
          name="normal_login"
          className="login-form tw-flex tw-flex-col tw-gap-2"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "لطفا نام کاربری خود را وارد کنید",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="نام کاربری"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "لطفا رمز خود را وارد کنید" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="رمز عبور"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                className="tw-w-[60%]"
                onChange={(e) => dispatch(setRemember(e.target.checked))}
              >
                مرا بخاطر بسپار
              </Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              فراموشی رمز عبور
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button tw-w-full tw-mb-4"
              loading={isLoading}
            >
              ورود
            </Button>
            <a href="">ساخت حساب کاربری</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

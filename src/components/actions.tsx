"use server";
import { cookies } from "next/headers";
import axios from "axios";

export async function SignUpAction(formData: any) {
  try {
    const response: any = await axios.post(
      "https://api.ganjoor.net/api/users/signup",
      formData
    );
    cookies().set("accessCode", formData.email, { secure: true });
    return { result: "Success" };
  } catch (error: any) {
    return {
      message: `${
        error.response.data
          ? error.response.data
          : error.statusCode === 400
          ? "لطفا اینترنت خود را بررسی کنی"
          : "مشکل در برقراری ارتباط"
      }`,
      result: "Failed",
    };
  }
}

export async function finalizesignup(formData: any) {
  try {
    const response: any = await axios.post(
      "https://api.ganjoor.net/api/users/finalizesignup",
      formData
    );
    cookies().delete("accessCode");
    return { result: "Success", message: "ثبت نام با موفقیت انجام گرفت" };
  } catch (error: any) {
    return {
      message: `${
        error.response.data
          ? error.response.data
          : error.statusCode === 400
          ? "لطفا اینترنت خود را بررسی کنی"
          : "مشکل در برقراری ارتباط"
      }`,
      result: "Failed",
    };
  }
}

export async function LoginAction(formData: any) {
  try {
    const response = await axios.post(
      "https://api.ganjoor.net/api/users/login",
      formData
    );
    console.log(response.data);
    cookies().set("userToken", response.data.token, { secure: true });
    cookies().set("userInfo", JSON.stringify(response.data.user), { secure: true });
    cookies().set("userSessionId", response.data.sessionId, { secure: true });
    return { result: "Success", message: "ثبت نام با موفقیت انجام گرفت" };
  } catch (error: any) {
    console.log(error);
    return {
      message: `${error.response.data}`,
      result: "Failed",
    };
  }
}

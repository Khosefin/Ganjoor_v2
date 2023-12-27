import { Button } from "antd";
import React from "react";

export default function signUpPage() {
  return (
    <div className="tw-flex tw-flex-col tw-gap-5 tw-bg-white tw-m-7 tw-p-10 tw-rounded-xl tw-border-2 tw-border-red-700 tw-text-center">
      <p className="tw-text-3xl max-sm:tw-text-xl tw-font-danaSB tw-leading-10">
        درحال حاضر دسترسی به این صفحه ممکن نمی باشد ...
      </p>

      <p className="tw-text-lg max-sm:tw-text-sm">
        در صورت تمایل میتوانید از سایت اصلی استفاده کنید
      </p>

      <Button href="https://ganjoor.net/signup" type="default" className="tw-text-red-700 tw-border-red-700 ">
        صفحه ی ثبت نام (سایت اصلی)
      </Button>
      <Button href="/login" type="primary">
        صفحه ی ورود
      </Button>
    </div>
  );
}

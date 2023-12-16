"use client";

import Meta from "antd/es/card/Meta";
import "./poet.css";
import Image from "next/image";
import { Button, Card } from "antd";

import { Typography } from "antd";
import { useState } from "react";

const { Paragraph, Text } = Typography;

export default function Poet({ params }: { params: { poet: string } }) {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div className="tw-flex tw-justify-center tw-gap-5 tw-w-11/12">
      <div className="tw-drop-shadow-sm tw-cursor-pointer tw-border tw-rounded-xl tw-w-3/5 tw-h-full">
        <Card
          className=" tw-text-justify"
          actions={[
            <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
              تولد:
              <span className="tw-font-danaR tw-text-[13px]">ترکیه</span>
            </p>,
            <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
              تاریخ تولد:
              <span className="tw-font-danaR tw-text-[13px]"> 9999</span>
            </p>,
            <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
              وفات:
              <span className="tw-font-danaR tw-text-[13px]"> توس</span>
            </p>,
            <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
              تاریخ وفات:
              <span className="tw-font-danaR tw-text-[13px]">9999</span>
            </p>,
            <p className="tw-flex tw-flex-col tw-gap-1 tw-text-[13px] tw-font-danaSB">
              دوره:
              <span className="tw-font-danaR tw-text-[13px]">قرن 10</span>
            </p>,
          ]}
        >
          <Meta
            className=""
            avatar={
              <Image
                src="/gdap.png"
                width="110"
                height="80"
                alt="poet picture"
              />
            }
            title="ابوالقاسم فردوسی"
            description={
              <Paragraph
                className="tw-opacity-70 tw-font-danaL tw-leading-6"
                ellipsis={
                  ellipsis
                    ? { rows: 3, expandable: true, symbol: "بیشتر" }
                    : false
                }
              >
                مشرف الدین مصلح بن عبدالله شیرازی شاعر و نویسندهٔ بزرگ قرن هفتم
                هجری قمری است. تخلص او «سعدی» است که از نام اتابک مظفرالدین سعد
                پسر ابوبکر پسر سعد پسر زنگی گرفته شده است. وی احتمالاً بین
                سالهای ۶۰۰ تا ۶۱۵ هجری قمری زاده شده است. در جوانی به مدرسهٔ
                نظامیهٔ بغداد رفت و به تحصیل ادب و تفسیر و فقه و کلام و حکمت
                پرداخت. سپس به شام و مراکش و حبشه و حجاز سفر کرد و پس از بازگشت
                به شیراز، به تألیف شاهکارهای خود دست یازید. وی در سال ۶۵۵ ه.ق
                سعدی‌نامه یا بوستان را به نظم درآورد و در سال بعد (۶۵۶ ه.ق)
                گلستان را تألیف کرد. علاوه بر اینها قصاید، غزلیات، قطعات، ترجیع
                بند، رباعیات و مقالات و قصاید عربی نیز دارد که همه را در کلیات
                وی جمع کرده‌اند. وی بین سالهای ۶۹۰ تا ۶۹۴ هجری قمری در شیراز
                درگذشت و در همانجا به خاک سپرده شد.
              </Paragraph>
            }
          />
        </Card>
        <div>
          <Button
            className=" tw-w-full tw-border-red-700 tw-mt-3 tw-text-base tw-h-9"
            type="primary"
          >
            شاهنامه
          </Button>
          <Button
            className="tw-w-full tw-border-red-700 tw-text-red-700 tw-mt-3 tw-text-base tw-h-9"
            type="default"
          >
            هجونامه (منتسب)
          </Button>
        </div>
      </div>
      <div className="related-images-frame" id="cat-stats">
        <div className="century"> آمار </div>
        <div id="stats-section">
          <p>
            این آمار از میان ۴۹٬۶۵۸ بیت شعر موجود در گنجور از اشعار این بخش
            استخراج شده است.
          </p>
          <div className="notice">
            <p>
              توجه فرمایید که این آمار به دلایلی از قبیل وجود چند نسخه از آثار
              شعرا در سایت (مثل آثار خیام) و همینطور یک بیت محسوب شدن مصرع‌های
              بند قالبهای ترکیبی مثل مخمس‌ها تقریبی و حدودی است و افزونگی دارد.
            </p>
            <p>
              آمار همهٔ شعرهای گنجور را <a href="/vazn">اینجا</a> ببینید.
            </p>
            <p>
              وزن‌یابی دستی در بیشتر موارد با ملاحظهٔ تنها یک مصرع از شعر صورت
              گرفته و امکان وجود اشکال در آن (مخصوصاً اشتباه در تشخیص وزنهای
              قابل تبدیل از قبیل وزن مثنوی مولوی به جای وزن عروضی سریع مطوی
              مکشوف) وجود دارد. وزن‌یابی ماشینی نیز که جدیداً با استفاده از
              امکانات <a href="http://www.sorud.info/">تارنمای سرود</a> اضافه
              شده بعضاً خطا دارد. برخی از بخشها شامل اشعاری با بیش از یک وزن
              هستند که در این صورت عمدتاً وزن ابیات آغازین و برای بعضی منظومه‌ها
              وزن غالب منظومه به عنوان وزن آن بخش منظور شده است.
            </p>
          </div>
          <table>
            <tr className="h">
              <td className="c1">ردیف</td> <td className="c2">وزن</td>
              <td className="c3">تعداد ابیات</td>
              <td className="c4">درصد از کل</td>
            </tr>
            <tr className="e">
              <td className="c1">۱</td>
              <td className="c2">
                <a href="/simi/?v=%D9%81%D8%B9%D9%88%D9%84%D9%86%20%D9%81%D8%B9%D9%88%D9%84%D9%86%20%D9%81%D8%B9%D9%88%D9%84%D9%86%20%D9%81%D8%B9%D9%84%20%28%D9%85%D8%AA%D9%82%D8%A7%D8%B1%D8%A8%20%D9%85%D8%AB%D9%85%D9%86%20%D9%85%D8%AD%D8%B0%D9%88%D9%81%20%DB%8C%D8%A7%20%D9%88%D8%B2%D9%86%20%D8%B4%D8%A7%D9%87%D9%86%D8%A7%D9%85%D9%87%29&a=4&c=32">
                  فعولن فعولن فعولن فعل (متقارب مثمن محذوف یا وزن شاهنامه)
                </a>
              </td>
              <td className="c3">۴۹٬۶۵۸</td> <td className="c4">۱۰۰٫۰۰</td>
            </tr>
          </table>
          <p>
            آمار ابیات برچسب‌گذاری شدهٔ این بخش با قالب شعری در گنجور به شرح زیر
            است:
          </p>
          <table>
            <tr className="h">
              <td className="c1">ردیف</td> <td className="c2">قالب شعری</td>
              <td className="c3">تعداد ابیات</td>
              <td className="c4">درصد از کل</td>
            </tr>
            <tr className="e">
              <td className="c1">۱</td>
              <td className="c2">
                <a href="/simi/?f=3&a=4&c=32">مثنوی</a>
              </td>
              <td className="c3">۴۹٬۶۵۷</td> <td className="c4">۱۰۰٫۰۰</td>
            </tr>
            <tr>
              <td className="c1">۲</td>
              <td className="c2">
                <a href="/simi/?f=7&a=4&c=32">غزل/قصیده/قطعه</a>
              </td>
              <td className="c3">۱</td> <td className="c4">۰٫۰۰</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

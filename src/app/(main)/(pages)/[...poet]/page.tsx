"use client";
import { location } from "@/lib/types";
import { HomeIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));
const PoetCard = dynamic(() => import("@/components/poetCard"));

async function getData(params: { poet: string; poem: Array<string> }) {
  try {
    const [response, responsePoetcard] = await Promise.all([
      axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet[0]}%2F${
          params.poet[1] ? `%2F${params.poet[1]}` : ""
        }${params.poet[2] ? `%2F${params.poet[2]}` : ""}${
          params.poet[3] ? `%2F${params.poet[3]}` : ""
        }${params.poet[4] ? `%2F${params.poet[4]}` : ""}${
          params.poet[5] ? `%2F${params.poet[5]}` : ""
        }&catPoems=true`
      ),
      axios.get(
        `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet[0]}&catPoems=true`
      ),
    ]);

    return {
      props: { data: [response.data, responsePoetcard.data] },
      revalidate: 60 * 60,
    };
  } catch (error) {
    redirect("/home?error=accessDenied");
  }
}

export default async function Poet({ params }: any) {
  const { props } = await getData(params);
  const location: Array<location> = [
    {
      name: "خانه",
      icon: <HomeIcon className="h-[1.1rem] w-[1.1rem]" />,
      href: "/home",
    },
    {
      name: props.data[1].title,
      href: `/${params.poet[0]}`,
    },
  ];

  if (params.poet[1])
    location.push({
      name: props.data[0].title,
      href: `/${props.data[0].fullUrl}`,
    });

  return (
    <>
      <div className="w-[94%] max-md:w-[96%]">
        <Location location={location} />
      </div>
      <div className="flex max-lg:flex-col justify-center gap-5 w-[94%] max-md:w-[96%] relative">
        <div className="cursor-pointer drop-shadow-md rounded-xl w-2/5 max-lg:w-full h-full relative">
          <PoetCard data={props.data[1]} />
        </div>
        <div
          className="main"
          dangerouslySetInnerHTML={{ __html: props.data[0].htmlText }}
        />
      </div>
    </>
  );
}

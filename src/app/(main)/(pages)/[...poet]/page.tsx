import PoetCard from "@/components/PoetCard";
import Location from "@/components/location";
import { location } from "@/lib/types";
import { HomeIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

async function getData(params: { poet: string; poem: Array<string> }) {
  try {
    const response = await axios.get(
      `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet[0]}%2F${
        params.poet[1] ? `%2F${params.poet[1]}` : ""
      }${params.poet[2] ? `%2F${params.poet[2]}` : ""}${
        params.poet[3] ? `%2F${params.poet[3]}` : ""
      }${params.poet[4] ? `%2F${params.poet[4]}` : ""}${
        params.poet[5] ? `%2F${params.poet[5]}` : ""
      }&catPoems=true`
    );

    const responsePoetcard = await axios.get(
      `https://api.ganjoor.net/api/ganjoor/page?url=%2F${params.poet[0]}&catPoems=true`
    );

    return [response.data, responsePoetcard.data];
  } catch (error) {
    redirect("/home")
  }
}   



export default async function Poet({ params }: any) {
  const data = await getData(params);
  const location: Array<location> = [
    {
      name: "خانه",
      icon: <HomeIcon className="h-[1.1rem] w-[1.1rem]" />,
      href: "/",
    },
    {
      name: data[1].name,
      href: params.poet[0]
    }
  ];
  return (
    <>
    <Location location={location}/>
      <div className="flex max-lg:flex-col justify-center gap-5 w-[94%] max-md:w-[96%] relative">
        <div className="cursor-pointer drop-shadow-md rounded-xl w-2/5 max-lg:w-full h-full relative">
          <PoetCard data={data[1]} params={params.poet} />
        </div>
        <div
          className="main"
          dangerouslySetInnerHTML={{ __html: data[0].htmlText }}
          key={randomUUID()}
        />
      </div>
    </>
  );
}

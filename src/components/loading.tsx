import Image from "next/image";
import loadingImage from "/public/images/loading.png";

const Loading = () => {
  return (
    <div className="z-[999] inset-0 flex flex-col fixed items-center text-center justify-center dark:bg-black bg-orange-700">
      <Image
        src={loadingImage}
        alt="Loading ..."
        className="animate-bounce"
        width={400}
      />
    </div>
  );
};

export default Loading;

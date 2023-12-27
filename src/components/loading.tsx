import Image from "next/image";
import loadingImage from "/public/loading.png";

const Loading = () => {
  return (
    <div className="tw-z-[999] tw-inset-0 tw-flex tw-flex-col tw-fixed tw-items-center tw-text-center tw-bg-[#C03F2C] tw-justify-center">
      <Image
        src={loadingImage}
        alt="Loading ..."
        className="tw-animate-bounce"
        width={400}
      />
    </div>
  );
};

export default Loading;

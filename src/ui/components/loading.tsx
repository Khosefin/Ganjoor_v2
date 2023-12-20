const Loading = () => {
  return (
    <div className="tw-z-[999] tw-inset-0 tw-flex tw-flex-col tw-fixed tw-items-center tw-text-center tw-bg-[#C03F2C] tw-justify-center">
      <img
        src="./loading.png"
        alt="Loading ..."
        className="tw-animate-bounce tw-w-[50%]"
      />
    </div>
  );
};

export default Loading;

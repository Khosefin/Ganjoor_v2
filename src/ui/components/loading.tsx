const Loading = () => {
  return (
    <div className="tw-z-[999] tw-inset-0 tw-flex tw-flex-col tw-fixed tw-items-center tw-text-center tw-bg-[#C03F2C] tw-justify-center">
      <img
        src="./loading.png"
        alt="Loading ..."
        className="tw-h-52 tw-animate-bounce"
      />
    </div>
  );
};

export default Loading;

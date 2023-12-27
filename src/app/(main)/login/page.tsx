import LoginPage from "@/ui/components/loginPage";

export default function page() {
  return (
    <div className="tw-flex tw-items-center max-lg:tw-justify-center tw-h-screen">
      <LoginPage />
      {/* <SingUpPage /> */}
      <div className="tw-flex tw-inset-0 tw-absolute -tw-z-10 tw-w-full tw-h-full">
        <img
          src="./ferdosi.png"
          alt="Loading ..."
          className="tw-object-cover tw-w-full tw-top-0"
        />
      </div>
    </div>
  );
}

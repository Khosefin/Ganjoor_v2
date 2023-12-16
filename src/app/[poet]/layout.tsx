export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">{children}</div>;
}

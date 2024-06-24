interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <main className={`px-[1rem] py-[2rem]`}>{children}</main>;
}

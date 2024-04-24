interface Props {
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ka" }];
}

export default function Root({ children }: Props) {
  return <>{children}</>;
}

interface Props {
  children: React.ReactNode;
}

export default function Root({ children }: Props) {
  return <>{children}</>;
}

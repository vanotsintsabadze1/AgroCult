interface Props {
  title: string;
  children: React.ReactNode;
}

export default function GenericInformationField({ title, children }: Props) {
  return (
    <div className="mt-[1rem] flex w-full flex-col items-center gap-[2rem] px-[.5rem]">
      <div className="flex w-full flex-col gap-[.5rem] md:w-[50rem]">
        <h4 className="ml-[.2rem] text-[1.2rem] font-semibold uppercase text-gray-400 ">{title}</h4>
        {children}
      </div>
    </div>
  );
}

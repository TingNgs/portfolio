import { HTMLProps, PropsWithChildren } from "react";

const Section = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) => {
  return (
    <section
      className={`p-10 flex flex-col gap-10 w-full max-w-[72rem] mx-auto ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;

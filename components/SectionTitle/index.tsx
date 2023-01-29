import { HTMLProps, PropsWithChildren } from "react";

const SectionTitle = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) => {
  return (
    <h2 className={`text-center text-4xl font-bold ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export default SectionTitle;

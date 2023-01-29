import { HTMLProps, PropsWithChildren } from "react";

const SectionDescription = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) => {
  return (
    <p className={`text-center text-xl ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default SectionDescription;

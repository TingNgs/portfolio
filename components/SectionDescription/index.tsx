import { HTMLProps, PropsWithChildren } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SectionDescription = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) => {
  return (
    <ReactMarkdown className={`text-center text-xl ${className}`} {...rest}>
      {children as string}
    </ReactMarkdown>
  );
};

export default SectionDescription;

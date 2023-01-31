import { HTMLProps } from "react";

const Link = ({
  text,
  color,
  ...rest
}: HTMLProps<HTMLAnchorElement> & { text: string; color: string }) => (
  <a className="hover:opacity-60" style={{ color }} {...rest}>
    {text}
  </a>
);

export default Link;

import React, {  ReactNode } from "react";
interface Props {
  props?: ReactNode;
  children?: ReactNode;
}

export default function Wrap({ children }: Props) {
  return <div className="flex flex-col w-full scroll-smooth">{children}</div>;
}

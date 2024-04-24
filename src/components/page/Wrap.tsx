import React, { JSXElementConstructor, ReactNode } from "react";
interface Props {
  props?: ReactNode;
  children?: ReactNode;
}

export default function Wrap({ children }: Props) {
  return <div className="flex-1">{children}</div>
}

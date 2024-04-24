import React, { JSXElementConstructor, ReactNode } from "react";
interface Props {
  props?: JSXElementConstructor<Props | ReactNode>;
}

export default function Wrap(props: Props) {
  return <div {...props} className="flex-1" />;
}

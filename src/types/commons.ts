import { CSSProperties } from "react";
import { Interpolation } from "styled-components";

export interface ChildrenProp {
  children: React.ReactNode;
}

export interface Styles {
  $styles?: Interpolation<CSSProperties>;
}

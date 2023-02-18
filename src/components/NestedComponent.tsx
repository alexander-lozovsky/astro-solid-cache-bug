import { ParentComponent } from "solid-js";

export const NestedComponent: ParentComponent = (props) => {
  return <div>{props.children}</div>;
};

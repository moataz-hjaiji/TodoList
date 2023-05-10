import { ReactElement } from "react";
export declare interface IRouteItem {
  exact: boolean;
  path: string;
  component: void | LazyExoticComponent<ComponentType<any>>;
  guard: void | LazyExoticComponent<ComponentType<any>>;
}

import React, { useLayoutEffect, useState } from "react";
import { Screen, screensAsArray } from "./mediaQueryUtils";
const decideScreenSize = (elementWidth?: number): Screen => {
  let res: Screen = "desktop";
  if (elementWidth) {
    const elementSizeQuery = screensAsArray.find((x) => x.size < elementWidth);
    if (elementSizeQuery) {
      res = elementSizeQuery.screen;
    }
  } else {
  }
  return res;
};
export const useMediaQuery = (element?: HTMLElement) => {
  const [state, setState] = useState<Screen>("desktop");
  useLayoutEffect(() => {
    if (element) {
      element.onresize = function (e) {
        setState(decideScreenSize((e.target as HTMLElement).clientWidth));
      };
    }
    setState(decideScreenSize(element?.clientWidth));
  }, [element]);
  return state;
};

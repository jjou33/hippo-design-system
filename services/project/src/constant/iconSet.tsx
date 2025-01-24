import { ReactNode } from "react";
import {
  BiAbacus,
  BiAccessibility,
  BiAddToQueue,
  BiAdjust,
} from "react-icons/bi";

import { FiMoon, FiSun } from "react-icons/fi";

type IconSetType = {
  [key: string]: {
    icon: () => ReactNode;
  };
};
export const IconSet: IconSetType = {
  Web4: {
    icon: () => {
      return <BiAbacus />;
    },
  },
  Web: {
    icon: () => {
      return <BiAccessibility />;
    },
  },
  Web2: {
    icon: () => {
      return <BiAddToQueue />;
    },
  },
  Web3: {
    icon: () => {
      return <BiAdjust />;
    },
  },
  lightMode: {
    icon: () => {
      return <FiSun />;
    },
  },
  darkMode: {
    icon: () => {
      return <FiMoon />;
    },
  },
};

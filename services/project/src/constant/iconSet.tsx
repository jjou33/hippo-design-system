import {
  BiAbacus,
  BiAccessibility,
  BiAddToQueue,
  BiAdjust,
} from "react-icons/bi";

export const IconSet = {
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
};

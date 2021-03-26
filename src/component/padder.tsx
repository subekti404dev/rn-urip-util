import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

interface PadderProps {
  children?: any;
  size?: number;
  type?: "all" | "t" | "b" | "l" | "r";
}

const Padder = (props: PadderProps) => {
  const size = scale(props.size || 10);
  const type = props.type || "all";
  const style: any = {};
  style[typeToAttr(type)] = size;

  return <View style={style}>{props.children}</View>;
};

const typeToAttr = (type: string) => {
  let attr;
  switch (type) {
    case "all":
      attr = "padding";
      break;
    case "t":
      attr = "paddingTop";
      break;
    case "b":
      attr = "paddingBottom";
      break;
    case "l":
      attr = "paddingLeft";
      break;
    case "r":
      attr = "paddingRight";
      break;
    default:
      attr = "padding";
      break;
  }
  return attr;
};

export default Padder;
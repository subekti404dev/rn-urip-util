import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

export enum PadderType {
 t = "t",
 b = "b",
 r = "r",
 l = "l",
 h = "h",
 v = "v",
}
interface PadderProps {
 children?: any;
 size?: number;
 type?: PadderType[];
}

const Padder = (props: PadderProps) => {
 const size = scale(props.size || 10);
 const types: PadderType[] = props.type || [
  PadderType.r,
  PadderType.l,
  PadderType.t,
  PadderType.b,
 ];
 const style: any = {};
 for (const type of types) {
  style[typeToAttr(type)] = size;
 }

 return <View style={style}>{props.children}</View>;
};

const typeToAttr = (type: PadderType) => {
 let attr;
 switch (type) {
  case PadderType.t:
   attr = "paddingTop";
   break;
  case PadderType.b:
   attr = "paddingBottom";
   break;
  case PadderType.l:
   attr = "paddingLeft";
   break;
  case PadderType.r:
   attr = "paddingRight";
   break;
  case PadderType.h:
   attr = "paddingHorizontal";
   break;
  case PadderType.v:
   attr = "paddingVertical";
   break;
  default:
   attr = "padding";
   break;
 }
 return attr;
};

export default Padder;

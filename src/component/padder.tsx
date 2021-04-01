import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

interface PadderProps {
 children?: any;
 all?: number | boolean;
 horizontal?: number | boolean;
 vertical?: number | boolean;
 top?: number | boolean;
 left?: number | boolean;
 bottom?: number | boolean;
 right?: number | boolean;
}

const Padder = (props: PadderProps) => {
 const sz = (v) => {
  return (typeof v === 'number') ? scale(v) : scale(10)
 }

 const style: any = {};
 if (props.all) style.padding = sz(props.all);
 if (props.top) style.paddingTop = sz(props.top);
 if (props.bottom) style.paddingBottom = sz(props.bottom);
 if (props.left) style.paddingLeft = sz(props.left);
 if (props.right) style.paddingRight = sz(props.right);
 if (props.horizontal) style.paddingHorizontal = sz(props.horizontal);
 if (props.vertical) style.paddingVertical = sz(props.vertical);

 return <View style={style}>{props.children}</View>;
};

export default Padder;

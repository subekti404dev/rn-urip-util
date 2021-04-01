import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

interface CircleProps {
 color?: string;
 size?: number;
 children?: any;
}

const Circle = (props: CircleProps) => {
 return (
  <View
   style={{
    backgroundColor: props.color || "purple",
    width: scale(props.size || 20),
    height: scale(props.size || 20),
    borderRadius: scale(props.size || 20) / 2,
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {props.children}
  </View>
 );
};

export default Circle;

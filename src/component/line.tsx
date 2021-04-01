import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

interface LineProps {
 size?: number;
 color?: string;
}

const Line = (props: LineProps) => {
 return (
  <View
   style={{
    borderBottomColor: props.color || "#aeaeae",
    borderBottomWidth: props.size || 0.5,
    width: "100%",
   }}
  />
 );
};

export default Line;

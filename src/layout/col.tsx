import * as React from "react";
import { View } from "react-native";

export const Col = ({ children, size }) => {
  const flex = size || 1;
  return <View style={{ flex, flexDirection: "column" }}>{children}</View>;
};

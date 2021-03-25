import React from "react";
import { View } from "react-native";

export const Row = ({ children, size }) => {
  const flex = size || 1;
  return <View style={{ flex, flexDirection: "row" }}>{children}</View>;
};

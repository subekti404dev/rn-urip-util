import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import Icons from "../assets";
import Col from "./col";
import Gap from "./gap";
import Padder from "./padder";
import Row from "./row";
import ScaledText from "./scaled-text";

interface CheckboxIconProps {
 color?: string;
 size?: number;
 checked?: boolean;
}
const CheckboxIcon = (props: CheckboxIconProps) => {
 const color = props.color || "purple";
 const unScaledSize = props.size || 23;
 const size = scale(unScaledSize);
 const imgSize = scale(unScaledSize - 8);
 return (
  <View
   style={{
    width: size,
    height: size,
    borderColor: color,
    borderWidth: 3,
    borderRadius: scale(5),
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {props.checked && (
    <Image
     source={Icons.check}
     style={{ width: imgSize, height: imgSize, tintColor: color }}
    />
   )}
  </View>
 );
};

interface CheckboxProps {
 color?: string;
 size?: number;
 checked?: boolean;
 label?: string;
 onPress?: () => void;
 fontSize?: number;
 labelStyle?: string;
}

const Checkbox = (props: CheckboxProps) => {
 return (
  <TouchableOpacity onPress={props.onPress}>
   <Padder size={2}>
    <Row>
     <CheckboxIcon size={props.size} color={props.color} checked={props.checked} />
     <Gap />
     <Col justifyCenter>
      <ScaledText size={props.fontSize || 18} style={props.labelStyle}>
       {props.label}
      </ScaledText>
     </Col>
    </Row>
   </Padder>
  </TouchableOpacity>
 );
};
export default Checkbox;

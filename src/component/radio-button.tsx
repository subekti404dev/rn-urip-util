import * as React from "react";
import { TouchableOpacity, StyleProp, TextStyle } from "react-native";
import Col from "./col";
import Gap from "./gap";
import Padder from "./padder";
import Radio from "./radio";
import Row from "./row";
import ScaledText from "./scaled-text";

interface RadioButtonProps {
 label?: string;
 labelStyle?: StyleProp<TextStyle>;
 active?: boolean;
 radioSize?: number;
 fontSize?: number;
 color?: string;
 onPress?: () => void;
 key?: number;
}
const RadioButton = (props: RadioButtonProps) => {
 return (
  <TouchableOpacity onPress={props.onPress}>
   <Padder size={2}>
    <Row>
     <Radio color={props.color} size={props.radioSize} active={props.active} />
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

export default RadioButton;

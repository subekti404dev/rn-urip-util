import * as React from "react";
import { View } from "react-native";
import Checkbox from "./checkbox";

interface CheckboxGroupProps {
 color?: string;
 data: string[];
 selected?: any;
 onChange?: (data: any) => void;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
 const [selected, setSelected] = React.useState(0);
 return (
  <View>
   {(props.data || []).map((d, i) => {
    const onPress = () => {
    
     setSelected(i);
     props.onChange && props.onChange(i);
    };

    return (
     <Checkbox
      key={i}
      checked={selected === i}
      onPress={onPress}
      label={d}
      color={props.color}
     />
    );
   })}
  </View>
 );
};

export default CheckboxGroup;

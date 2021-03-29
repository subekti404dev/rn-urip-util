import * as React from "react";
import * as _ from "lodash";
import { View } from "react-native";
import Checkbox from "./checkbox";
import Padder, { PadderType } from "./padder";

interface CheckboxGroupProps {
 color?: string;
 data: string[];
 selected?: string[];
 onChange?: (data: string[]) => void;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
 const [selected, setSelected]: [
  selected: string[],
  setSelected: any
 ] = React.useState([]);

 React.useEffect(() => {
  const selected = (props.selected || []).filter((s) => props.data.includes(s));
  setSelected(selected);
 }, []);

 return (
  <View>
   {(props.data || []).map((d, i) => {
    const index = selected.indexOf(d);
    const newSelected = _.cloneDeep(selected);
    const onPress = () => {
     if (index > -1) {
      newSelected.splice(index, 1);
     } else {
      newSelected.push(d);
     }
     setSelected(newSelected);
     if (props.onChange) props.onChange(newSelected);
    };

    return (
     <Padder key={i} type={[PadderType.v]} size={2}>
      <Checkbox
       checked={index > -1}
       onPress={onPress}
       label={d}
       color={props.color}
      />
     </Padder>
    );
   })}
  </View>
 );
};

export default CheckboxGroup;

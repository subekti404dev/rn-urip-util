import * as React from "react";
import {
 View,
 StyleSheet,
 TouchableOpacity,
 ScrollView,
 Image,
 Dimensions,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import RNModal from "react-native-modal";
import Row from "./row";
import Col from "./col";
import ScaledText from "./scaled-text";
import Icons from "../assets";

const Modal: any = RNModal;

interface Data {
 label?: string;
 value?: string;
}

interface Offset {
 x?: number;
 y?: number;
}

interface DropdownProps {
 data?: Data[];
 value?: any;
 onChange?: (item: Data) => any;
 placeholder?: string;
 placeholderColor?: string;
 itemStyle?: any;
 itemTextColor?: string;
 height?: number;
 fontSize?: number;
 offset?: Offset;
}

const Dropdown = (props: DropdownProps) => {
 let inputRef: any;
 const zIndex = 50;
 const fontSize = moderateScale(props.fontSize || 16);
 const height = scale(props.height || 45);
 const [isVisible, setIsVisible] = React.useState(false);
 const [activeItem, setActiveItem]: [activeItem: any, setActiveItem: any] = React.useState(null);
 const [width, setWidth] = React.useState(0);
 const [position, setPosition] = React.useState({ x: 0, y: 0 });
 const data = props.data || [];
 const radius: any = { borderRadius: 5 };
 if (isVisible) radius["borderBottomLeftRadius"] = 0;
 if (isVisible) radius["borderBottomRightRadius"] = 0;
 if (isVisible) radius["borderBottomWidth"] = 0;

 React.useEffect(() => {
  if (props.value) {
   const item = data.find((d) => d.value === props.value);
   item && setActiveItem(item);
  }
 }, []);

 const calculatedPosition = () => {
  if (inputRef) {
   inputRef.measureInWindow(
    (x: number, y: number, width: number, _height: number) => {
     const isPotrait =
      Dimensions.get("window").height > Dimensions.get("window").width;
     const { offset } = props;
     let xOffset = isPotrait ? -17 : -37;
     let yOffset = isPotrait ? 25 : 5;
     if (offset && offset.x) xOffset += offset.x;
     if (offset && offset.y) yOffset += offset.y;

     setWidth(width);
     setPosition({ x: x + scale(xOffset), y: y + scale(yOffset) });
    }
   );
  }
 };

 return (
  <View
   ref={(ref) => {
    inputRef = ref;
   }}
  >
   <TouchableOpacity
    style={[styles.input, { zIndex: zIndex + 1, height }, radius]}
    onPress={(e) => {
     calculatedPosition();
     setIsVisible(!isVisible);
    }}
   >
    <Row>
     <Col size={3} justifyCenter>
      <ScaledText
       size={fontSize}
       color={activeItem ? "black" : props.placeholderColor || "grey"}
      >
       {activeItem ? activeItem.label : props.placeholder || "Please Select"}
      </ScaledText>
     </Col>
     <Col size={1} justifyCenter alignEnd>
      <Image
       source={isVisible ? Icons.arrowUp : Icons.arrowDown}
       style={{
        width: scale(15),
        height: scale(15),
        tintColor: "grey",
        marginRight: scale(5),
       }}
      />
     </Col>
    </Row>
   </TouchableOpacity>
   <Modal
    style={{
     width,
     position: "absolute",
     height: scale(150),
     top: position.y,
     left: position.x,
    }}
    backdropOpacity={0.07}
    isVisible={isVisible}
    animationIn="fadeIn"
    animationOut="fadeOut"
    onModalHide={() => setIsVisible(false)}
    onBackdropPress={() => setIsVisible(false)}
   >
    <ScrollView
     style={{
      backgroundColor: "#FFF",
      borderBottomLeftRadius: scale(5),
      borderBottomRightRadius: scale(5),
     }}
    >
     {data.map((item: any, index: number) => {
      const isLast = data.length - 1 === index;
      const onPress = () => {
       if (props.onChange) props.onChange(item);
       setActiveItem(item);
       setIsVisible(false);
      };
      return (
       <TouchableOpacity
        onPress={onPress}
        style={[
         styles.item,
         props.itemStyle,
         { borderBottomWidth: isLast ? 0 : 1, height: height - 5 },
        ]}
        key={index}
       >
        <ScaledText size={fontSize} color={props.itemTextColor}>
         {item.label}
        </ScaledText>
       </TouchableOpacity>
      );
     })}
    </ScrollView>
   </Modal>
  </View>
 );
};

const styles = StyleSheet.create({
 backdrop: {
  backgroundColor: "rgba(0,0,0,0.3)",
  position: "absolute",
  top: 0,
  bottom: 0,
  height: 1000,
  left: 0,
  right: 0,
 },
 input: {
  width: "100%",
  borderColor: "grey",
  borderRadius: 5,
  borderWidth: 1,
  justifyContent: "center",
  paddingHorizontal: 5,
  backgroundColor: "white",
 },
 item: {
  borderBottomColor: "#dedede",
  borderBottomWidth: 1,
  justifyContent: "center",
  paddingHorizontal: 5,
  width: "100%",
 },
 dropdown: {
  position: "absolute",
  width: "100%",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor: "white",
  borderWidth: 1,
  borderColor: "grey",
  maxHeight: 300,
 },
});

export default Dropdown;

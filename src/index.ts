import { LogBox } from 'react-native'
import {
 Button,
 Input,
 Padder,
 Col,
 Row,
 Gap,
 ScaledText,
 Dropdown,
 RadioButton,
 Radio,
 RadioButtonGroup,
} from "./component";
import * as _ from "lodash";
import * as mmt from "moment";
import * as sizeMatters from "react-native-size-matters";
import { fromIDR, formatIDR, formatDate, StorageUtil, EventUtilClass } from "./util";


LogBox.ignoreLogs(["Require cycle:"]);

const utils = {
 _,
 mmt,
 sizeMatters,
 fromIDR,
 formatIDR,
 formatDate,
 storage: new StorageUtil(),
 eventUtil: new EventUtilClass()
};

export {
 Row,
 Col,
 Button,
 Padder,
 Input,
 Gap,
 ScaledText,
 Dropdown,
 Radio,
 RadioButton,
 RadioButtonGroup,
 utils,
};

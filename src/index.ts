import { Button, Input, Padder, Col, Row, Gap } from "./component";
import * as _ from "lodash";
import * as mmt from "moment";
import * as sizeMatters from "react-native-size-matters";
import { fromIDR, formatIDR, formatDate, StorageUtil } from "./util";

const utils = {
  _,
  mmt,
  sizeMatters,
  fromIDR,
  formatIDR,
  formatDate,
  storage: new StorageUtil()
};

export {
  Row,
  Col,
  Button,
  Padder,
  Input,
  Gap,
  utils
};




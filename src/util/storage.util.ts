import { AsyncStorage } from "react-native";

export class StorageUtil {
 private _data = {};
 constructor() {
  this.init();
 }

 public async init() {
  const keys = (await AsyncStorage.getAllKeys()) || [];
  const promises = keys.map((key) => AsyncStorage.getItem(key));
  const data: any = await Promise.all(promises);
  const result = {};
  for (const key of keys) {
   let value = null;
   try {
    value = JSON.parse(data[key]);
   } catch (error) {
    value = data[key];
   }
   result[key] = value;
  }
  this._data = result;
 }

 public get(key: string) {
  return this._data[key];
 }

 public set(key: string, value: string | object) {
  if (typeof value === "object") value = JSON.stringify(value);
  AsyncStorage.setItem(key, value);
 }
}

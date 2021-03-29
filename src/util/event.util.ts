export class EventUtilClass {
 private _events = {};
 public on(key: string | string[], fun: (data: any) => void) {
  if (typeof key === "string") {
   this.assignFun(key, fun);
  } else {
   for (let k of key) {
    this.assignFun(k, fun);
   }
  }
 }

 public emit(key: string | string[], data?: any) {
  if (typeof key === "string") {
   this.callFun(key, data);
  } else {
   for (let k of key) {
    this.callFun(k, data);
   }
  }
 }

 public remove(key: string) {
   this._events[key] = undefined;
 }

 private assignFun(key: string, fun: any) {
  this._events[key] = fun;
 }

 private callFun(key: string, data?: any) {
  const fun = this._events[key];

  if (fun) {
   if (data) {
    fun(data);
   } else {
    fun();
   }
  }
 }
}

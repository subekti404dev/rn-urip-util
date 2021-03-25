
export const toIDR = (value: number) => {
  const arr = value.toString().split("").reverse();
  let str: string[] = [];
  for (let i=0; i< arr.length; i++) {
    const char = arr[i];
    str.push(char);
    if ((i+1) % 3 === 0) {
      str.push(".");
    }
  }
  return `Rp ${str.reverse().join("")}`;
}
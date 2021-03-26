export const formatIDR = (value: number) => {
  const num = value.toString().split(".");
  const integer = num[0] || "";
  const decimal = num[1] || "";
  const arr = integer.split("").reverse();
  let str: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const isLast = arr.length === i + 1;
    str.push(char);
    if ((i + 1) % 3 === 0 && !isLast) {
      str.push(".");
    }
  }
  let result = `Rp ${str.reverse().join("")}`;
  if (decimal) result += `,${decimal}`;
  return result;
};

export const fromIDR = (idr: string) => {
  const numString = idr
    .toLowerCase()
    .replace("rp", "")
    .replace(" ", "")
    .replace(".", "")
    .replace(",", ".");
  try {
    return parseFloat(numString);
  } catch (error) {
    return null;
  }
};

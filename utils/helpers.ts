interface IsortListByPriority {
  priority: number;
  [key: string]: any;
}

// TODO: реализовать более изящно в плане дженериков
export function sortListByPriority<T extends IsortListByPriority>(a: T, b: T) {
  return a.priority - b.priority;
}

// TODO: переписать, как обертку над toLocaleString
export const splitNumberIntoDigits = (num: number): string => {
  const value = num.toString();
  let arr = value.split('');
  if (arr.length <= 3) return value;

  const result = [];
  while (arr.length) result.push(arr.splice(-3).join(''));
  return result.reverse().join(' ');
};

export const getValueInMinMaxRange = (value: number, min: number, max: number) => {
  if (value >= min && value <= max) return value;
  if (value < min) return min;
  return max;
};

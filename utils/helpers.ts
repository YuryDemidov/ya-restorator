type TSortableByPriority = {
  priority: number;
  [key: string]: any;
};

export function sortListByPriority<T extends TSortableByPriority>(a: T, b: T) {
  return a.priority - b.priority;
}

export const formatPrice = (price: number) => {
  return price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};

// TODO: переписать все использования этой функции на formatPrice
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

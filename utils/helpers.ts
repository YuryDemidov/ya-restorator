type TSortableByPriority = {
  priority: number;
  [key: string]: any;
};

export function sortListByPriority<T extends TSortableByPriority>(a: T, b: T) {
  return a.priority - b.priority;
}

export function formatNumber(value: number, isFloatPrice = true, addCurrency = true) {
  let output = value.toLocaleString('ru-RU', isFloatPrice ? { style: 'currency', currency: 'RUB' } : {});
  if (isFloatPrice && !addCurrency) {
    output = output.slice(0, output.length - 2);
  } else if (!isFloatPrice && addCurrency) {
    output += ' ₽';
  }
  return output;
}

export function isFirefox(): boolean {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

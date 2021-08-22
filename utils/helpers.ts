import ym from 'react-yandex-metrika';

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

export const ymHandler = (event: React.SyntheticEvent<HTMLElement>) => {
  const goal = event.currentTarget.getAttribute('data-ymgoal');
  ym('reachGoal', goal);
};

export const toUppercaseFirstLetter = (string: string) => {
  return string
    .trim()
    .toLowerCase()
    .replace(/^[a-z]/g, (char) => char.toUpperCase());
};

export function isFirefox(): boolean {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

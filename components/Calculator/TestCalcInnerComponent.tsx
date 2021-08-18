// TODO: надо не забыть удалить этот компонент,
// когда реализуются внутренние компоненты инпутов калькулятора
// сейчас он нужен просто для наглядного примера использования в <Calculator />

import { useCallback } from 'react';

import { useCalculator } from './Calculator';

interface ITestCalcInnerComponent {
  value: number;
  onChange: (newValue: number) => void;
}

export const TestCalcInnerComponent = ({ value, onChange }: ITestCalcInnerComponent) => {
  const revenue = useCalculator();
  const handleClick = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  return <p onClick={handleClick}>test calc inner component, revenue inside component: {revenue}</p>;
};

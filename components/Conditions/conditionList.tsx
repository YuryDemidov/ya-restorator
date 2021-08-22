// ATTENTION: id задан string, т.к. в будущем может подтягиваться из базы данных, а не быть просто цифрой
// ATTENTION: priority задан, чтобы фильтровать по порядку, т.к. в какой-то момент порядок отображения может поменяться
export type Condition = {
  id: string;
  priority: number;
  condition: React.ReactChild;
  footnote?: React.ReactChild;
  tariff15: boolean;
  tariff35: boolean;
};

export const conditionList: Condition[] = [
  {
    id: '1',
    priority: 1,
    condition: <>Размещение в каталоге ресторанов и сервисах Яндекса</>,
    tariff15: true,
    tariff35: true,
  },
  {
    id: '2',
    priority: 2,
    condition: <>Приложение для работы с заказами</>,
    tariff15: true,
    tariff35: true,
  },
  {
    id: '4',
    priority: 4,
    condition: <>Эквайринг</>,
    tariff15: true,
    tariff35: true,
  },
  {
    id: '6',
    priority: 0,
    condition: <>Доставка курьерами Яндекс.Еды</>,
    footnote: <>Пешими курьерами на 3 км, автокурьерами на 10 км, за ~ 32 мин</>,
    tariff15: false,
    tariff35: true,
  },
];

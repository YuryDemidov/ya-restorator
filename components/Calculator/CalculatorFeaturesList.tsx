import { useCalculator } from '~c/Calculator/Calculator';
import styles from './Calculator.module.scss';

export const CalculatorFeaturesList = () => {
  const { deliveryByYandex } = useCalculator();

  const featuresList: React.ReactChild[] = [
    `Доставка ${deliveryByYandex ? 'партнерами Яндекс.Еды' : 'курьерами вашего ресторана'}`,
    'Кросплатформенное приложение для управления заказами',
    'Размещение в каталоге ресторанов и сервисах Яндекса',
    'Эквайринг',
    'Бухгалтерская отчетность',
  ];

  return (
    <div className={styles.featuresList}>
      <h4 className={styles.featuresTitle}>Что сюда входит:</h4>
      <ol className={styles.features}>
        {featuresList.map((feature, i) => {
          return (
            <li className={styles.feature} key={i}>
              {feature}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

import { useCalculator } from '~c/Calculator/Calculator';
import styles from './Calculator.module.scss';

const featuresList = [
  'Доставка Яндекс Едой за ~32 минуты',
  'Размещение в каталоге',
  'Эквайринг',
  'Кроссплатформенное приложение для управления заказами',
  'Продвижение сервиса',
  'Бухгалтерская отчетность',
];

export const CalculatorFeaturesList = () => {
  const { deliveryByYandex } = useCalculator();

  return (
    <div className={styles.featuresList}>
      <h4 className={styles.featuresTitle}>Что сюда входит:</h4>
      <ol className={styles.features}>
        {featuresList.map((feature, i) => {
          return (
            (i !== 0 || deliveryByYandex) && (
              <li className={styles.feature} key={i}>
                {feature}
              </li>
            )
          );
        })}
      </ol>
    </div>
  );
};

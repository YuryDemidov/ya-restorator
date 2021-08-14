import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { PhoneMockup } from '~c/MobileAppScreen/PhoneMockup';
import styles from './MobileAppScreen.module.scss';

export const MobileAppScreen = () => {
  return (
    <Section className={styles.wrapper}>
      <Title className={styles.title} level="h2">
        Управляйте рестораном через приложение
      </Title>
      <ul className={styles.list}>
        <li className={styles.item}>Принимайте и&nbsp;выполняйте заказы</li>
        <li className={styles.item}>Редактируйте меню, время работы доставки, если ресторан загружен</li>
        <li className={styles.item}>Следите за&nbsp;оборотом и&nbsp;динамикой заказов, средним чеком</li>
        <li className={styles.item}>Смотрите, где находится курьер</li>
      </ul>
      <PhoneMockup className={styles.hiddenMobile} />
      <PhoneMockup className={styles.hiddenMobile} />
      <PhoneMockup className={styles.hiddenDesktop} />
    </Section>
  );
};

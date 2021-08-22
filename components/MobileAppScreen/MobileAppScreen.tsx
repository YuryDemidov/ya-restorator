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
        <li className={styles.item}>Принимайте и выполняйте заказы по мере загруженности ресторана</li>
        <li className={styles.item}>Редактируйте меню и время работы</li>
        <li className={styles.item}>Следите за оборотом, динамикой заказов и средним чеком</li>
        <li className={styles.item}>Смотрите, где находится курьер</li>
      </ul>
      <PhoneMockup />
      <PhoneMockup />
    </Section>
  );
};

import cn from 'classnames';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { Button } from '~c/Button/Button';
import styles from './Hero.module.scss';
import { LINKS } from '~u/constants/links';

export const Hero = () => {
  return (
    <Section className={styles.hero}>
      <div className={styles.heroContent}>
        <Title className={styles.heroTitle} level="h1">
          Получайте новые заказы с сервисом Яндекс.Еда
        </Title>
        <p className={styles.subtitle}>Новые клиенты, доставка, реклама вашего ресторана</p>
        <Button dataYmGoal="passOrderHeroAction" link={LINKS.linkWelcome}>
          Оставить заявку
        </Button>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.heroMainImage}></div>
        <div className={styles.heroMainBg}></div>
        <div className={cn(styles.heroTab1, 'heroTab')} />
        <div className={cn(styles.heroTab2, 'heroTab')} />
        <div className={cn(styles.heroTab3, 'heroTab')} />
        <div className={cn(styles.heroTab4, 'heroTab')} />
      </div>
    </Section>
  );
};

import Image from 'next/image';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { Button } from '~c/Button/Button';
import HeroImage from './hero-image.png';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section className={styles.hero}>
      <div className={styles.heroContent}>
        <Title className={styles.heroTitle} level="h1">
          Подключите ресторан к сервису Яндекс.Еда
        </Title>
        <p className={styles.subtitle}>Новые клиенты, больше заказов, доставка, реклама вашего ресторана</p>
        <Button link="https://yandex.secure.force.com/welcome/">Оставить заявку</Button>
      </div>
      <div className={styles.heroImage}>
        <Image alt="Подключение ресторана Еды" src={HeroImage} />
      </div>
    </Section>
  );
};

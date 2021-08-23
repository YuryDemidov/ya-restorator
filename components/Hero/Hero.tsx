import { useEffect, useState } from 'react';
import cn from 'classnames';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { Button } from '~c/Button/Button';
import { LINKS } from '~u/constants/links';
import styles from './Hero.module.scss';

export const Hero = () => {
  const [animation1Ended, setAnimation1Ended] = useState<boolean | null>(null);
  const [animation2Ended, setAnimation2Ended] = useState<boolean | null>(null);
  const [animation3Ended, setAnimation3Ended] = useState<boolean | null>(null);
  const [animation4Ended, setAnimation4Ended] = useState<boolean | null>(null);
  const [animation5Ended, setAnimation5Ended] = useState<boolean | null>(null);
  const [animation6Ended, setAnimation6Ended] = useState<boolean | null>(null);
  useEffect(() => {
    const allAnimations = [
      animation1Ended,
      animation2Ended,
      animation3Ended,
      animation4Ended,
      animation5Ended,
      animation6Ended,
    ];
    const startedAnimations = allAnimations.filter((animationStatus) => animationStatus !== null);
    if (startedAnimations.length === 0) return;
    const isAllStartedAnimationsEnded = startedAnimations.every(Boolean);

    let timer: NodeJS.Timeout;
    if (isAllStartedAnimationsEnded) {
      timer = setTimeout(() => {
        console.log('hero_main_animation_ended');
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [animation1Ended, animation2Ended, animation3Ended, animation4Ended, animation5Ended, animation6Ended]);

  return (
    <Section className={styles.hero}>
      <div className={styles.heroContent} data-test="hero">
        <Title className={styles.heroTitle} level="h1">
          Получайте новые заказы с сервисом Яндекс.Еда
        </Title>
        <p className={styles.subtitle}>Новые клиенты, доставка, реклама вашего ресторана</p>
        <Button dataYmGoal="passOrderHeroAction" link={LINKS.linkWelcome}>
          Оставить заявку
        </Button>
      </div>
      <div className={styles.heroImage} data-test="heroImage">
        <div
          className={styles.heroMainImage}
          onAnimationStart={() => setAnimation1Ended(false)}
          onAnimationEnd={() => setAnimation1Ended(true)}></div>
        <div
          className={styles.heroMainBg}
          onAnimationStart={() => setAnimation2Ended(false)}
          onAnimationEnd={() => setAnimation2Ended(true)}></div>
        <div
          className={cn(styles.heroTab1, 'heroTab')}
          onAnimationStart={() => setAnimation3Ended(false)}
          onAnimationEnd={() => setAnimation3Ended(true)}
        />
        <div
          className={cn(styles.heroTab2, 'heroTab')}
          onAnimationStart={() => setAnimation4Ended(false)}
          onAnimationEnd={() => setAnimation4Ended(true)}
        />
        <div
          className={cn(styles.heroTab3, 'heroTab')}
          onAnimationStart={() => setAnimation5Ended(false)}
          onAnimationEnd={() => setAnimation5Ended(true)}
        />
        <div
          className={cn(styles.heroTab4, 'heroTab')}
          onAnimationStart={() => setAnimation6Ended(false)}
          onAnimationEnd={() => setAnimation6Ended(true)}
        />
      </div>
    </Section>
  );
};

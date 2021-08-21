import { Title } from '~c/Title/Title';
import { Button } from '~c/Button/Button';
import styles from './ConnectUs.module.scss';
import { Section } from '~c/Section/Section';
import { ConnectUsImage } from './ConnectUsImage';
import { LINKS } from '~u/constants/links';

export const ConnectUs = () => {
  return (
    <Section className={styles.connectUs}>
      <div className={styles.connectUsContent}>
        <Title className={styles.connectUsContentTitle} level="h2">
          Присоединяйтесь к Яндекс.Еде
        </Title>
        <p className={styles.connectUsContentDescription}>
          Выберите удобный вариант сотрудничества и оставьте заявку на подключение. Мы свяжемся с вами, чтобы обсудить
          детали подключения.
        </p>
        <Button className={styles.connectUsButton} link={LINKS.linkWelcome} appearance="thirdly">
          Оставить заявку
        </Button>
      </div>
      <div className={styles.connectUsImage}>
        <ConnectUsImage />
      </div>
    </Section>
  );
};

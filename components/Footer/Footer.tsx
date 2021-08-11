import { Link } from '~c/Link/Link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.footerLeft}>
          <p className={styles.footerParagraph}>
            Яндекс вправе отказать ресторану в заключении договора, если ресторан не удовлетворяет критериям
            добросовестности и благонадёжности, установленным Яндексом.
          </p>
          <p className={styles.footerParagraph}>
            Яндекс.Еда — информационный сервис. Доставку осуществляют партнёры сервиса. Зона и время доставки
            ограничены.
          </p>
          <p className={styles.footerCopyright}>Яндекс © 2021</p>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.footerNote}>Есть вопросы? Задайте нам</p>
          <Link href="tel:+78006001310" className={styles.footerPhone}>
            +7 800 600 13 10
          </Link>
        </div>
      </div>
    </footer>
  );
};

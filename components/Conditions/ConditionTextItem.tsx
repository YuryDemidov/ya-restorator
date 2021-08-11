import styles from './Conditions.module.scss';

interface IConditionTextItemProps {
  text: React.ReactChild;
  footnote?: React.ReactChild;
}

export const ConditionTextItem = ({ text, footnote = '' }: IConditionTextItemProps) => {
  return (
    <div className={styles.conditionsTextItem}>
      <p className={styles.conditionsTextItemText}>{text}</p>
      {footnote && <span className={styles.conditionsTextItemFootnote}>{footnote}</span>}
    </div>
  );
};

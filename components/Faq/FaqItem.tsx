import { useState } from 'react';
import cn from 'classnames';

import { Icon } from '~c/Icon/Icon';
import { ymHandler } from '~u/helpers';
import styles from './Faq.module.scss';

interface IFaqItemProps {
  id: number;
  question: React.ReactChild;
  answer: React.ReactChild;
  dataYmGoal?: string;
}

type TTabIndexValue = 0 | -1;

export const FaqItem = ({ id, question, answer, dataYmGoal }: IFaqItemProps) => {
  const [answerHeight, setAnswerHeight] = useState(0);
  const isExpanded = answerHeight > 0;

  const getAnswerNode = (questionNode: HTMLButtonElement) => {
    const answerId = questionNode.getAttribute('aria-controls');
    return questionNode.closest('dl')?.querySelector<HTMLParagraphElement>(`#${answerId}`);
  };

  const changeLinksTabIndex = (parent: HTMLParagraphElement, tabIndex: TTabIndexValue) => {
    parent.querySelectorAll('a').forEach((link) => (link.tabIndex = tabIndex));
  };
  const enableLinksFocus = (parent: HTMLParagraphElement) => changeLinksTabIndex(parent, 0);
  const disableLinksFocus = (parent: HTMLParagraphElement) => changeLinksTabIndex(parent, -1);

  const toggleAccordion = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const answerNode = getAnswerNode(evt.currentTarget);

    if (!answerNode) {
      return;
    }

    if (isExpanded) {
      setAnswerHeight(0);
      disableLinksFocus(answerNode);
      if (evt.clientX && evt.clientY) {
        (document.activeElement as HTMLElement).blur();
      }
    } else {
      ymHandler(evt);
      setAnswerHeight(answerNode.scrollHeight || 0);
      enableLinksFocus(answerNode);
    }
  };

  return (
    <>
      <dt
        className={cn(styles.term, {
          [styles.termOpened]: isExpanded,
        })}>
        <button
          data-ymgoal={dataYmGoal}
          className={styles.trigger}
          type="button"
          aria-controls={`faq${id}`}
          aria-expanded={isExpanded}
          onClick={toggleAccordion}>
          <span className={styles.questionContent}>
            {question}
            <Icon className={styles.questionIcon} type="arrow" size="l" />
          </span>
        </button>
      </dt>
      <dd style={{ maxHeight: answerHeight }} className={styles.definition}>
        <p id={`faq${id}`} className={styles.answer}>
          {answer}
        </p>
      </dd>
    </>
  );
};

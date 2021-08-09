import React, { useState } from 'react';
import cn from 'classnames';

import { SvgIcon } from '../Svg/SvgIcon';

import styles from './Faq.module.scss';

interface IFaqItemProps {
  id: number;
  question: React.ReactChild;
  answer: React.ReactChild;
}

const FaqItem = ({ id, question, answer }: IFaqItemProps): React.ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [answerHeight, setAnswerHeight] = useState(0);

  const open = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const answerId = evt.currentTarget.getAttribute('aria-controls');
    const answerNode = evt.currentTarget.closest('dl')?.querySelector(`#${answerId}`);
    const answerHeight = answerNode ? answerNode.scrollHeight : 0;

    setAnswerHeight(answerHeight);
    setIsExpanded(true);
  };
  const close = () => {
    setAnswerHeight(0);
    setIsExpanded(false);
  };

  return (
    <>
      <dt
        className={cn(styles.term, {
          [styles.termOpened]: isExpanded,
        })}>
        <button
          className={styles.trigger}
          type="button"
          aria-controls={`faq${id}`}
          aria-expanded={isExpanded}
          onClick={isExpanded ? close : open}>
          <span className={styles.questionContent}>
            {question}
            <SvgIcon id={`icon-arrow`} className={styles.questionIcon} width={24} height={24} />
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

export default FaqItem;

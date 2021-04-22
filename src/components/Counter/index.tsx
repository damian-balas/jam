import { useEffect, useState } from 'react';

import styles from '../../styles/Counter/Counter.module.scss';

type CounterProps = (
  | {
      to: number;
      from?: never;
      type: 'increasing';
    }
  | {
      to?: never;
      from: number;
      type: 'decreasing';
    }
) & {
  intervalTime: number;
  color?: string;
  numberCounterColor?: string;
  hideNumberCounter?: true;
};

/**
 *
 * @param type can be either 'increasing' or 'decreasing'. Type property declares if the counter should increment or decrement.
 * @param to number the Counter should increment to. The property can only be set if type === 'increment'
 * @param from number the Counter should decrement to. The property can only be set if type === 'decreasing'
 * @param intervalTime sets the speed of the incrementing/decrementing in milliseconds
 * @param color sets the color of the counter
 * @param numberCounterColor sets the color of the number in the counter
 * @param hideNumberCounter if true then the number in the counter is hidden
 */
const Counter: React.FunctionComponent<CounterProps> = ({
  type,
  to = 0,
  from = 0,
  intervalTime = 1000,
  color = '#000000',
  numberCounterColor = '#000000',
  hideNumberCounter = false,
}) => {
  const initialCount = type === 'increasing' ? 0 : from;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (type === 'increasing') {
        setCount((previousCount) => previousCount + 1);
      } else {
        setCount((previousCount) => previousCount - 1);
      }
    }, intervalTime);

    if (type === 'increasing' && count >= to) {
      clearInterval(timerInterval);
    } else if (type === 'decreasing' && count <= 0) {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [count, type, intervalTime, from, to]);

  return (
    <span className={styles.counter}>
      {!hideNumberCounter && (
        <span
          className={styles.counterNumber}
          style={{ color: numberCounterColor }}>
          {count}
        </span>
      )}
      {count.toLocaleString.test}
      <svg className={styles.counterSvg} style={{ color }}>
        <circle
          style={{
            animationDuration: type === 'increasing' ? `${to}s` : `${from}s`,
            stroke: color,
          }}
          className={styles.counterCircle}
          r="18"
          cx="20"
          cy="20"
        />
      </svg>
    </span>
  );
};

export default Counter;

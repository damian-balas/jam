import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Counter from '../components/Counter';
import Emoji from '../components/Emoji';

import styles from '../styles/404/404.module.scss';

const NotFound: React.FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFoundHeading}>
        Sorry! Page not found... <Emoji label="Pensive Face" symbol="😔" />
      </h2>
      <p className={styles.notFoundParagraph}>
        You will be redirected to the{' '}
        <Link href="/">
          <a className={styles.notFoundLink}>Homepage</a>
        </Link>{' '}
        in{' '}
        <Counter
          type="decreasing"
          from={5}
          intervalTime={1000}
          color="#d80032"
          numberCounterColor="#d80032"
        />{' '}
        seconds...
      </p>
    </div>
  );
};

export default NotFound;

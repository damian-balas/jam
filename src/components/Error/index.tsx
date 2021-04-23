import React from 'react';
import Emoji from '../Emoji';

import styles from '../../styles/Error/Error.module.scss';

type ErrorProps = {
  heading: string;
  paragraph?: string;
};

const Error: React.FunctionComponent<ErrorProps> = ({
  heading,
  paragraph,
  children,
}) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorHeading}>
        {heading} <Emoji label="Crying Face" symbol="😢" />
      </h2>
      {paragraph && <p className={styles.errorParagraph}>{paragraph}</p>}
      <div>{children}</div>
    </div>
  );
};

export default Error;

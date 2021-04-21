import classNames from "classnames";
import Link from "next/link";
import styles from "./Layout.module.scss";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.link}>
            <h1 className={styles.heading}>
              <span className={classNames(styles.text, styles.textTop)}>
                Just Add
              </span>
              <span className={classNames(styles.text, styles.textBottom)}>
                Marmite
              </span>
            </h1>
            <h2 className={styles.subHeading}>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className={styles.pageContent}>{children}</div>

      <footer className={styles.footer}>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  );
};

export default Layout;

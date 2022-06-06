import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={'Hi'} description="Welcome to my personal website, my name is Carlos del Moral.">
      <main>
        <div className={styles.mainContainer}>
          <h2 className={styles.mainContainerItem}>👋 Hi, my name is</h2>
          <h1 className={clsx(styles.mainContainerItem, 'hero__title')}>Carlos del Moral</h1>

          <div className={styles.linksContainer}>
            <div className={styles.linksContainerItem}>
              <a href="https://linkedin.com/in/cdelmoralronda">linkedin</a>
            </div>
            <div className={styles.linksContainerItem}>
              <a href="https://github.com/cdelmoral">github</a>
            </div>
            <div className={styles.linksContainerItem}>
              <a href="https://flickr.com/cdelmoral">flickr</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

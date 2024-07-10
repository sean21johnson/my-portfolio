import { ReactNode } from 'react';

import styles from './Layout.module.css';

type PropsType = {
  children: ReactNode;
};

export const ProfileLayout = ({ children }: PropsType) => {
  return <div className={styles.profileLayout}>{children}</div>;
};

export const ProfileLayoutRight = ({ children }: PropsType) => {
  return <div className={styles.profileLayoutRight}>{children}</div>;
};

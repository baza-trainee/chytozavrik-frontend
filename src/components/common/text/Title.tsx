import { ReactNode, createElement } from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss';

type Props = {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const Title = ({ children, variant, className }: Props) => {
  return createElement(
    variant,
    { className: classNames(className, styles.title, styles[`title--${variant}`]) },
    children
  );
};

export default Title;

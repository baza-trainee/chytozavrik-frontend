import { ReactNode, createElement } from 'react';
import classNames from 'classnames';
import styles from './List.module.scss';

type Props = {
  children: ReactNode;

  component: 'li';
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'| 'footer'|'footer-end';


  className?: string;
};

const List = ({ children, variant, component, className }: Props) => {
  return createElement(
    component,
    { className: classNames(className, styles[`text-${variant}`]) },
    children
  );
};

export default List;
import { ReactNode, createElement } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

type Props = {
  children: ReactNode;
  component: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  variant: 'p' |'p' |'h1' | 'h2' | 'h3' | 'h4' | 'body';
  className?: string;
};

const Typography = ({ children, variant, component, className }: Props) => {
  return createElement(component, { className: classNames(className, styles[`text--${variant}`]) }, children);
};

export default Typography;

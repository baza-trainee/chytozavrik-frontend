import styles from './Button.module.scss'
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: Props) => {
    const classes = classNames(styles.button, className);
    return (
        <button type="submit" className={styles.button} >Вхід</button>
    )
}

export {Button}
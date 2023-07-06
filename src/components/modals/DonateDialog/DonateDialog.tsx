import { Typography } from '@/components/common';
import styles from './DonateDialog.module.scss';

type Props = {
  onClose: () => void;
};

const DonateDialog = ({ onClose }: Props) => {
  return (
    <div className={styles.dialog}>
      <Typography className={styles.title} component="h2" variant="h3">
        Допоможіть нам відкрити світ книг для дітей!
      </Typography>
    </div>
  );
};

export default DonateDialog;

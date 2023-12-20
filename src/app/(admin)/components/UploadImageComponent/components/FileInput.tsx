import React from 'react';
import styles from '@/app/(admin)/components/UploadImageComponent/UploadImage.module.scss';
import Image from 'next/image';

const FileInput = ({
  onFileChange,
  file,
  initialImg,
}: {
  onFileChange: (file: File | null) => void;
  file: File | null;
  initialImg: string;
}) => {
  const src = file ? URL.createObjectURL(file) : initialImg;
  return (
    <div className={styles.uploadedImageContainer}>
      <Image
        className={styles.uploadedImage}
        src={src}
        alt="Uploaded Image"
        width={120}
        height={175}
      />
      <button className={styles.closeButton} onClick={() => onFileChange(null)}>
        <Image src="/images/admin/x.svg" alt="close icon" height={16} width={16} />
      </button>
    </div>
  );
};

export default FileInput;

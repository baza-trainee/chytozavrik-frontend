import React from 'react';
import { CustomArrowProps } from 'react-slick';
import Image from 'next/image';

const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    >
      <Image src={'/images/monsters/wigwam-next.svg'} alt={'наступний'} width={61} height={64} />
    </div>
  );
};

export default NextArrow;
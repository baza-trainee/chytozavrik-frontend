import React from 'react';
import { Button } from 'components/common';
import AddIcon from '@/app/(admin)/components/Header/Icons/AddIcon';
import CloseIcon from '@/app/(admin)/components/Header/Icons/CloseIcon';
import style from './Header.module.scss'


interface AdminHeaderProps {
  withSearch: boolean,
  withButton: boolean,
  withClose: boolean,
  heading:string,
  buttonText?:string,
  subHeading?: string[],
  searchWord?:string,
  // setSearchWord,
  buttonFunc?: () => void,
  closeFunc?: () => void,
}

const AdminHeader = ({
                       withSearch = false,
                       withButton = false,
                       withClose = false,
                       heading = "",
                       buttonText = "",
                       searchWord = "",
                       subHeading,
                       // setSearchWord,
                       buttonFunc,
                       closeFunc,
                     }: AdminHeaderProps) => {
  return (
    <div className={style.header}>
      <div>
        <h4 className={style.header__heading}>{heading}</h4>
        {subHeading &&
          <p className={style.header__subheading}>
            <span style={{color: "#1E1E1E"}}>{subHeading[0]}</span> / {subHeading[1]}
          </p>
        }
      </div>
      <div className={style.header__content}>
        {withSearch ? (
         <p className={style.test}>Search input</p>
        ) : null}
        {withButton ? (
          <Button variant="filled" color="secondary" startIcon={<AddIcon/>}
           onClick={buttonFunc}>
            {buttonText}
          </Button>
        ) : null}
        {withClose ? (
          <div onClick={closeFunc} onKeyDown={closeFunc}>
            <CloseIcon/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminHeader;
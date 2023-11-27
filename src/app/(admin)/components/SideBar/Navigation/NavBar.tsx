'use client';

import React, { useState } from 'react';
import LinkButton from '@/app/(admin)/components/UI/SideBarLinks/LinkButton';
import { Route } from '@/constants';
import styles from './NavBar.module.scss';
import {
  Book,
  UsersIcon,
  File,
  Briefcase,
  UserSquare,
  PieChart,
  LockKeyhole,
  Brain,
  BookMarked,
  ChevronUp, ChevronDown,
} from 'lucide-react';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openLinkHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const arrow = isOpen
    ? <ChevronUp color={'white'} onClick={(e) => openLinkHandler(e)} />
    :
    <ChevronDown color={'white'} onClick={(e) => openLinkHandler(e)} />

      return (
      <nav className={styles.navigation}>
      <LinkButton href={Route.USERS} anchor={'Користувачі'} icon={<UsersIcon color={'white'} />} />
      <LinkButton href={Route.BOOKS} anchor={'Книги'} icon={<Book color={'white'} />} iconOpen={arrow} />
      {isOpen &&
        <>
          <LinkButton href={Route.QUIZZES} anchor={'Вікторини'} icon={<Brain strokeWidth={3} color={'white'} />} />
          <LinkButton href={Route.RECOMMENDED} anchor={'Рекомендовані'} icon={<BookMarked color={'white'} />} />
        </>
      }
      <LinkButton href={Route.DOCUMENTS} anchor={'Документи'} icon={<File color={'white'} />} />
      <LinkButton href={Route.PARTNERS} anchor={'Партнери'} icon={<Briefcase color={'white'} />} />
      <LinkButton href={Route.CONTACTS} anchor={'Контакти'} icon={<UserSquare color={'white'} />} />
      <LinkButton href={Route.STATS} anchor={'Статистика'} icon={<PieChart color={'white'} />} />
      <LinkButton href={Route.CHANGE_PASS} anchor={'Змінити пароль'} icon={<LockKeyhole color={'white'} />} />
    </nav>
)
};

export default NavBar;
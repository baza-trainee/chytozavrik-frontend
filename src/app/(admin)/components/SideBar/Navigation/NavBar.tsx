'use client';

import React, { ReactNode, useState } from 'react';
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
  BookMarked,
  ChevronUp, ChevronDown,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MenuItemsType } from '@/types';
import LockIcon from '@/app/(admin)/components/SideBar/NavIcons/LockIcon';
import Neurology from '@/app/(admin)/components/SideBar/NavIcons/Neurology';

type MenuItemNames = 'books' | 'quizzes' | 'recommended';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const [activeMenuItem, setActiveMenuItem] = useState<ActiveMenuItem>('books');
  const menuItems: MenuItemsType = {
    books: {
      href: Route.BOOKS,
      icon: <Book color={'white'} />,
      anchor: 'Книги',
    },
    quizzes: {
      href: Route.QUIZZES,
      icon: <Neurology/>,
      anchor: 'Вікторини',
    },
    recommended: {
      href: Route.RECOMMENDED,
      icon: <BookMarked color={'white'} />,
      anchor: 'Рекомендовані',
    },
  };

  type ActiveMenuItem = keyof typeof menuItems;

  const toggleDropdown = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const openLinkHandler = (menuItemName: MenuItemNames) => {
    setActiveMenuItem(menuItemName);
    router.push(menuItems[menuItemName].href);
    setIsOpen(false);
  };

  const arrow = isOpen
    ? <ChevronUp color={'white'} onClick={toggleDropdown} />
    :
    <ChevronDown color={'white'} onClick={toggleDropdown} />;

  return (
    <nav className={styles.navigation}>
      <LinkButton href='/admin'
                  anchor={'Користувачі'}
                  icon={<UsersIcon color={'white'} />}
                  component={'link'}
      />
      <LinkButton
        component={'button'}
        href={menuItems[activeMenuItem].href}
        anchor={menuItems[activeMenuItem].anchor}
        icon={menuItems[activeMenuItem].icon}
        iconOpen={arrow}
        onClick={() => openLinkHandler(activeMenuItem)}
      />
      {isOpen && (Object.keys(menuItems) as Array<keyof MenuItemsType>).map((itemName) => (
        itemName !== activeMenuItem && (
          <LinkButton
            key={itemName}
            component={'button'}
            href={menuItems[itemName].href}
            anchor={menuItems[itemName].anchor}
            icon={menuItems[itemName].icon}
            onClick={() => openLinkHandler(itemName)}
          />
        )
      ))}
      <LinkButton component={'link'} href={Route.DOCUMENTS} anchor={'Документи'} icon={<File color={'white'} />} />
      <LinkButton component={'link'} href={Route.PARTNERS} anchor={'Партнери'} icon={<Briefcase color={'white'} />} />
      <LinkButton component={'link'} href={Route.CONTACTS} anchor={'Контакти'} icon={<UserSquare color={'white'} />} />
      <LinkButton component={'link'} href={Route.STATS} anchor={'Статистика'} icon={<PieChart color={'white'} />} />
      <LinkButton component={'link'} href={Route.CHANGE_PASS} anchor={'Змінити пароль'} icon={<LockIcon/>} />
    </nav>
  );
};

export default NavBar;
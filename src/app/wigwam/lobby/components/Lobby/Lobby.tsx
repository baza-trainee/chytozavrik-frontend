import Link from 'next/link';
import { Container, Typography } from '@/components/common';
import { Route } from '@/constants';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from '../Avatar';
import type { ChildType } from '@/types';
import styles from './Lobby.module.scss';

type Props = {
  users: ChildType[];
};

const Avatars = [
  undefined,
  <Avatar1 key="avatar1" />,
  <Avatar2 key="avatar2" />,
  <Avatar3 key="avatar3" />,
  <Avatar4 key="avatar4" />,
  <Avatar5 key="avatar5" />,
  <Avatar6 key="avatar6" />,
];

const Lobby = ({ users }: Props) => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Typography className={styles.title} component="h1" variant="h2">
          Привіт! <br /> Ми за тобою сумували
        </Typography>
        <ul className={styles.list}>
          {users.map(({ id, name, avatar }) => (
            <li key={id} className={styles.item}>
              <Link className={styles.link} href={`${Route.WIGWAM}/${id}`} data-avatar>
                <div className={styles.thumb}>{Avatars.at(avatar)}</div>
                <Typography className={styles.name} component="p" variant="h2">
                  {name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Lobby;

"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import Container from "../common/Container/Container";

const Header = () => {
  return (
    <Container className={classNames(styles.headerContainer, styles.header)}>
      <Image
        src="/path431.png"
        width={64}
        height={54}
        alt="Logo"
        className={classNames(styles.logo)}
      />
      <div className={classNames(styles.buttonContainer)}>
        <Link className={classNames(styles.link)} href="#">
          Про проєкт
        </Link>
        <Button children={undefined} />
      </div>
    </Container>
  );
};

export { Header };

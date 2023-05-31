import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps): React.ReactElement => {
  return <header className={styles["visually-hidden"]}>{title}</header>;
};

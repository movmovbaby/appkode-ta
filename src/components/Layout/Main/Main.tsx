import styles from "./Main.module.css";

interface MainProps {
  children?: React.ReactElement | React.ReactElement[];
}

export const Main = ({ children }: MainProps): React.ReactElement => {
  return <main className={styles.main}>{children}</main>;
};

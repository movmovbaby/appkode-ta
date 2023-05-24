import styles from "./Main.module.css";

interface MainProps {
  children?: JSX.Element | JSX.Element[];
}

export const Main = ({ children }: MainProps): JSX.Element => {
  return <main>{children}</main>;
};

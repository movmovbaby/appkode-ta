import { LoaderItem } from "./LoaderItem";
import styles from "./Loader.module.css";

export const Loader = (): React.ReactElement => {
  const items = Array.from(Array(6).keys());
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <LoaderItem />
          </li>
        ))}
      </ul>
    </section>
  );
};

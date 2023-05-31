import styles from "./Loader.module.css";

export const LoaderItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.rects}>
        <div className={styles["long-rect"]}></div>
        <div className={styles["short-rect"]}></div>
      </div>
    </div>
  );
};

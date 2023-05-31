import styles from "./UsersNotFoun.module.css";

export const UsersNotFound = (): React.ReactElement => {
  return (
    <section className={styles.wrapper}>
      <img
        className={styles.icon}
        src={require("../../styles/magnifying-glass.png")}
        alt="magnifying glass icon"
        width="56"
        height="56"
      />
      <div className={styles["text-block"]}>
        <p className={styles.absent}>Мы ничего не нашли </p>
        <p className={styles.text}>Попробуй скорректировать запрос</p>
      </div>
    </section>
  );
};

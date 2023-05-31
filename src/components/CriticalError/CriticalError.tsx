import { Link } from "react-router-dom";
import styles from "./CriticalError.module.css";

export const CriticalError = (): React.ReactElement => (
  <section className={styles.wrapper}>
    <img
      src={require("../../styles/flying-saucer.png")}
      alt="magnifying glass icon"
      width="56"
      height="56"
    />
    <div className={styles["text-block"]}>
      <p className={styles.absent}>Какой-то сверхразум всё сломал</p>
      <p className={styles.text}>Постараемся быстро починить</p>
      <Link className={styles.link} to="/">
        Попробовать снова
      </Link>
    </div>
  </section>
);

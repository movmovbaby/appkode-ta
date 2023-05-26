import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { SortingModal } from "../SortingModal";
import { DepartmentsFilter } from "../DepartmentFilters/DepartmentsFilter";
import { sortFilterActions } from "../../store/sortFilterReducer";
import styles from "./TopAppBar.module.css";

export const TopAppBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>();
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;
    setText(text);
    dispatch(sortFilterActions.setInputFilter(text));
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>Поиск</h2>
      <form className={styles.form}>
        <label htmlFor="search-input" className={styles["input-label"]}>
          <input
            className={styles["search-input"]}
            id="search-input"
            type="text"
            placeholder=""
            onChange={onInputChange}
            required={true}
          />
          <span className={styles.placeholder}>Введи имя, тег, почту...</span>
          <span className={styles["search-button"]}>
            <svg
              className={styles["search-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#C3C3C6"
                d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
              />
            </svg>
          </span>
        </label>
      </form>
      {/* <SortingModal /> */}
      <DepartmentsFilter />
    </section>
  );
};

import { useEffect, useRef } from "react";
import { sortFilterActions } from "../../store/sortFilterReducer";
import { useAppDispatch } from "../../store/hooks";
import styles from "./SortingModal.module.css";

export const SortingModal = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log("dialog mount");
    const showButton = buttonRef.current;
    const dialog = dialogRef.current;

    if (!showButton || !dialog) {
      return;
    }

    showButton.addEventListener("click", () => {
      if (!dialog) {
        return;
      }
      dialog.close();
      dialog.showModal();
    });

    return () => {
      console.log("dialog cleanup");
      dialog.close();
      showButton.removeEventListener("click", () => {
        if (!dialog) {
          return;
        }
        dialog.showModal();
      });
      // showButton.focus();
    };
  }, []);

  const onAlphabetSort = () => {
    dispatch(sortFilterActions.setSortType("alphabet"));
    if (dialogRef.current !== null && buttonRef.current !== null) {
      dialogRef.current.close();
      buttonRef.current.focus();
    }
  };

  const onBirthDaySort = () => {
    dispatch(sortFilterActions.setSortType("birth-day"));
    if (dialogRef.current !== null && buttonRef.current !== null) {
      dialogRef.current.close();
      buttonRef.current.focus();
    }
  };

  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.header}>
          <h3 className={styles.title}>Сортировка</h3>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => {
              dialogRef.current?.close();
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7364 3.2636C13.0879 3.61508 13.0879 4.18492 12.7364 4.5364L9.273 8L12.7364 11.4636C13.0586 11.7858 13.0854 12.2915 12.817 12.6442L12.7364 12.7364C12.3849 13.0879 11.8151 13.0879 11.4636 12.7364L8 9.273L4.5364 12.7364C4.18492 13.0879 3.61508 13.0879 3.2636 12.7364C2.91213 12.3849 2.91213 11.8151 3.2636 11.4636L6.727 8L3.2636 4.5364C2.94142 4.21421 2.91457 3.70853 3.18306 3.35577L3.2636 3.2636C3.61508 2.91213 4.18492 2.91213 4.5364 3.2636L8 6.727L11.4636 3.2636C11.8151 2.91213 12.3849 2.91213 12.7364 3.2636Z"
                fill="#C3C3C6"
              />
            </svg>
          </button>
        </div>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="alphabet">
            <input
              type="radio"
              name="sorting"
              id="alphabet"
              value="alphabet"
              defaultChecked={true}
              onChange={onAlphabetSort}
            />
            По алфавиту
          </label>

          <label className={styles.label} htmlFor="birth-date">
            <input
              type="radio"
              name="sorting"
              id="birth-date"
              value="birth-date"
              onChange={onBirthDaySort}
            />
            По дню рождения
          </label>
        </form>
      </dialog>
      <button className={styles["modal-button"]} ref={buttonRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="12"
          fill="none"
        >
          <path
            fill="#C3C3C6"
            d="M1.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 2h14a1 1 0 1 0 0-2h-14a1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10-5h-10a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2Zm0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"
          />
        </svg>
      </button>
    </>
  );
};

import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { sortFilterActions } from "../../store/sortFilterReducer";
import styles from "./DepartmentFilter.module.css";

export const DepartmentsFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<string>("all");

  const handleFilterClick = (event: any) => {
    event.preventDefault();
    const filter = event.target.id;
    setActive(filter);

    if (filter === "all") {
      dispatch(sortFilterActions.resetDepartmentFilter());
    } else {
      dispatch(sortFilterActions.setDepartmentFilter(filter));
    }
  };

  const departments = [
    ["all", " Все"],
    ["design", "Designers"],
    ["analytics", "Analysts"],
    ["management", "Managers"],
    ["ios", "iOS"],
    ["android", "Android"],
  ];

  return (
    <div className={styles["button-tab"]}>
      {departments.map((dep) => (
        <button
          key={dep[0]}
          className={
            active === dep[0]
              ? `${styles["filter-button"]} ${styles["filter-active"]}`
              : styles["filter-button"]
          }
          type="button"
          onClick={(e) => handleFilterClick(e)}
          id={dep[0]}
        >
          {dep[1]}
        </button>
      ))}
    </div>
  );
};

import { Link, useNavigate } from "react-router-dom";
import type { User } from "../../types";
import type { SortType } from "../../store/sortFilterReducer";
import { shortFormatBirthday } from "../../utils";
import styles from "./UserItem.module.css";

interface UserItemProps {
  user: User;
  sort: SortType;
}

export const UserItem = ({ user, sort }: UserItemProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Link
        className={styles.item}
        to={`/users/${user.id}`}
        onClick={() => navigate("/")}
      >
        <img
          className={styles.avatar}
          src={user.avatarUrl}
          alt="user avatar"
          height="72"
          width="72"
        />
        <div className={styles.info}>
          <span className={styles.personal}>
            {`${user.firstName} ${user.lastName}`}
            <small className={styles.tag}>{user.userTag}</small>
          </span>
          <span className={styles.department}>{user.department}</span>
        </div>
        {sort === "birth-day" ? (
          <div className={styles.years}>
            <span>{shortFormatBirthday(user.birthday)}</span>
          </div>
        ) : null}
      </Link>
    </>
  );
};

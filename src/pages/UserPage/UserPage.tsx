import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/Layout/Header/Header";
import { Main } from "../../components/Layout/Main/Main";
import { useGetUsersQuery } from "../../api/UserService";
import { defaultUrl } from "../../api/apiUrls";
import { fullFormatBirthday, getFullYearAge } from "../../utils";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  const { userId } = useParams<string>();
  const { data: users } = useGetUsersQuery(defaultUrl);

  const user = users?.filter((user) => user.id === userId)[0];

  if (user === undefined) {
    return <div> Error </div>;
  }

  const birthday = fullFormatBirthday(user.birthday);
  const age = getFullYearAge(user.birthday);

  return (
    <>
      <Header title={"Профиль пользователя, контакты"} />
      <Main>
        <div className={`${styles.wrapper} ${styles["bg-color-secondary"]}`}>
          <nav className={styles.nav}>
            <Link to="/" className={styles["nav-back"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#050510"
                  d="m9.17 12.71 4.24 4.24a.998.998 0 0 0 1.42 0 1 1 0 0 0 0-1.41L11.29 12l3.54-3.54a1 1 0 0 0 0-1.41 1.001 1.001 0 0 0-.71-.29 1 1 0 0 0-.71.29l-4.24 4.24a.999.999 0 0 0 0 1.42Z"
                />
              </svg>
            </Link>
          </nav>
          <div className={styles.info}>
            <img
              src={user.avatarUrl}
              alt="user avatar"
              height="104"
              width="104"
              className={styles.avatar}
            />
            <span className={styles.username}>
              {`${user.firstName} ${user.lastName}`}
              <small className={styles.usertag}>{user.userTag}</small>
            </span>
            <span className={styles.department}>{user.department}</span>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles["bg-color-white"]}`}>
          <div className={styles.details}>
            <div className={styles.age}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                >
                  <path
                    fill="#050510"
                    d="M20 7.67a1 1 0 0 0-.86-.67l-5.69-.83L10.9 1a1 1 0 0 0-1.8 0L6.55 6.16.86 7a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 20 7.67Zm-6.15 4a1 1 0 0 0-.29.88l.72 4.2-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2 .72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55L10 3.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"
                  />
                </svg>
              </span>
              <span className={styles.birthday}>{birthday}</span>
              <span className={styles.years}>{age}</span>
            </div>
            <div className={styles["phone-container"]}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                >
                  <path
                    fill="#050510"
                    d="M18.44 11c-.22 0-.45-.07-.67-.12a9.439 9.439 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.178 12.178 0 0 1-2-2.66L9.52 7a2 2 0 0 0 1-2.48 10.32 10.32 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2.741-1.778c.173-.388.26-.808.259-1.232v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.724.962c-.14.043-.29.056-.436.038A17 17 0 0 1 3.07 3.22a1.09 1.09 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79c.04.273.09.543.15.81.115.527.27 1.045.46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .57-.52l.62-1.4a13.68 13.68 0 0 0 1.58.46c.267.06.537.11.81.15a1 1 0 0 1 .79 1l.02 3.12Z"
                  />
                </svg>
              </span>
              <a href={`tel:${user.phone}`} className={styles.phone}>
                {user.phone}
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

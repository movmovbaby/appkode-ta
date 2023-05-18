import { useMemo } from "react";
import { useGetUsersQuery } from "../api/UserService";
import { CriticalError } from "./CriticalError";
import { Spinner } from "./Spinner";
import { UsersNotFound } from "./UsersNotFound";
import type { User } from "../types";
import { allUsers, dynamicUsers } from "../api/apiUrls";
import { useAppSelector } from "../store/hooks";

export const UserList = () => {
  const { data, error, isLoading } = useGetUsersQuery(dynamicUsers);
  console.log(data);
  /**
   * загрузить данные +
   * взять сортировку из стора - нужен слайс +
   * взять фильтр по департаменту из стора - нужен слайс +
   * отфильтровать по департаменту - в один проход + useMemo +
   * отсортировать - в один проход + useMemo +
   * отфильтровывать по введенным в инпут данным - дебаунс по нажатию
   *
   * отобразить
   */

  const { filter, sort } = useAppSelector((state) => state.sortAndFilter);

  const filtredUsers = useMemo(() => {
    const filtredUsers = !filter
      ? data
      : data?.filter((user) => user.department === filter);

    let filtredAndSorted = filtredUsers?.slice();
    filtredAndSorted?.sort((user1, user2) => {
      if (sort === "alphabet") {
        if (user1.firstName > user2.firstName) return 1;
        if (user2.firstName > user1.firstName) return -1;
        return 0;
      } else {
        if (user1.birthday > user2.birthday) return 1;
        if (user2.birthday > user1.birthday) return -1;
        return 0;
      }
    });

    return filtredAndSorted;
  }, [data, filter, sort]);

  if (error) {
    return <CriticalError />;
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  if (!filtredUsers || filtredUsers.length === 0) {
    return <UsersNotFound />;
  }

  return (
    filtredUsers && (
      <ul>
        {filtredUsers.map((user: User) => (
          <li key={user.id}>
            <img src={user.avatarUrl} alt="user avatar" />
            <div>
              <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <small>{user.userTag}</small>
            <div>
              <span>{user.department}</span>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

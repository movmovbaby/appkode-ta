import { useMemo } from "react";
import { UserItem } from "./UserItem";
import { useGetUsersQuery } from "../api/UserService";
import { CriticalError } from "./CriticalError";
import { Spinner } from "./Spinner";
import { UsersNotFound } from "./UsersNotFound";
import { allUsers, dynamicUsers, serverError } from "../api/apiUrls";
import { useAppSelector } from "../store/hooks";
import { alphabeticSort, birthdaySort } from "../utils";
import { usersObjectType } from "../utils";

export const UserList = (): JSX.Element => {
  /**
   * загрузить данные +
   * взять сортировку из стора -  слайс +
   * взять фильтр по департаменту из стора -  слайс +
   * отфильтровать по департаменту - в один проход + useMemo +
   * отсортировать - в один проход + useMemo +
   * отфильтровывать по введенным в инпут данным: имя фамилия никнейм - слайс +
   * отобразить
   * =====================
   * выделить компоненты элементов списка, пропсами передавать тип сортировки для изменения отображения +
   * отсортировать по дате как указано в задании +
   */
  const { data, error, isLoading } = useGetUsersQuery(dynamicUsers);

  const { inputFilter, departmentFilter, sort } = useAppSelector(
    (state) => state.sortAndFilter
  );

  const filtredUsersObject = useMemo((): usersObjectType => {
    const departmentFiltered = !departmentFilter
      ? data
      : data?.filter((user) => user.department === departmentFilter);

    const inputFiltred = !inputFilter
      ? departmentFiltered
      : departmentFiltered?.filter((user) => {
          const lowerCaseFilter = inputFilter.toLowerCase();
          let tag = false;
          let firstName = false;
          let lastName = false;

          if (inputFilter.length === 2) {
            tag = user.userTag.toLowerCase() === lowerCaseFilter;
          }

          firstName = user.firstName.toLowerCase().includes(lowerCaseFilter);
          lastName = user.lastName.toLowerCase().includes(lowerCaseFilter);

          return tag || firstName || lastName;
        });

    const sortedUsers = inputFiltred?.slice();

    if (sort === "alphabet") {
      return {
        currentYear: sortedUsers?.sort(alphabeticSort),
        nextYear: [],
      } as usersObjectType;
    } else {
      const userObject: usersObjectType = birthdaySort(sortedUsers);
      return userObject;
    }
  }, [data, departmentFilter, inputFilter, sort]);

  if (error) {
    return <CriticalError />;
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  if (
    filtredUsersObject.currentYear.length === 0 &&
    filtredUsersObject.nextYear.length === 0
  ) {
    return <UsersNotFound />;
  }

  return (
    <>
      <ul>
        {filtredUsersObject.currentYear.map((user) => (
          <UserItem user={user} sort={sort} />
        ))}
      </ul>
      {filtredUsersObject.nextYear.length === 0 ? null : (
        <>
          <p>2024</p>
          <ul>
            {filtredUsersObject.nextYear.map((user) => (
              <UserItem user={user} sort={sort} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

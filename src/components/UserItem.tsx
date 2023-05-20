import type { User } from "../types";
import type { SortType } from "../store/sortFilterReducer";
import { formatBirthday } from "../utils";

interface UserItemProps {
  user: User;
  sort: SortType;
}

export const UserItem = ({ user, sort }: UserItemProps) => {
  return (
    <>
      <img src={user.avatarUrl} alt="user avatar" />
      <div>
        <span>{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <small>{user.userTag}</small>
      <div>
        <span>{user.department}</span>
      </div>
      {sort === "birth-day" ? (
        <p>
          <span>{formatBirthday(user.birthday)}</span>
        </p>
      ) : null}
    </>
  );
};

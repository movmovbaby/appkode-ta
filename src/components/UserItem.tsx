import { Link, useNavigate } from "react-router-dom";
import type { User } from "../types";
import type { SortType } from "../store/sortFilterReducer";
import { shortFormatBirthday } from "../utils";

interface UserItemProps {
  user: User;
  sort: SortType;
}

export const UserItem = ({ user, sort }: UserItemProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Link to={`/users/${user.id}`} onClick={() => navigate("/")}>
        <img src={user.avatarUrl} alt="user avatar" height="72" width="72" />
        <div>
          <span>{`${user.firstName} ${user.lastName}`}</span>
        </div>
        <small>{user.userTag}</small>
        <div>
          <span>{user.department}</span>
        </div>
        {sort === "birth-day" ? (
          <p>
            <span>{shortFormatBirthday(user.birthday)}</span>
          </p>
        ) : null}
      </Link>
    </>
  );
};

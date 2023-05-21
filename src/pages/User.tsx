import { useNavigate, useParams } from "react-router";
import { usersApi } from "../api/UserService";
import { allUsers, dynamicUsers } from "../api/apiUrls";
import { fullFormatBirthday, getFullYearAge } from "../utils";

export const User = () => {
  const { userId } = useParams<string>();
  const navigate = useNavigate();
  const { data: users } =
    usersApi.endpoints.getUsers.useQueryState(dynamicUsers);
  const user = users?.filter((user) => user.id === userId)[0];

  if (user === undefined) {
    return <div> Error </div>;
  }

  const birthday = fullFormatBirthday(user.birthday);
  const age = getFullYearAge(user.birthday);

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div>
        <img src={user.avatarUrl} alt="user avatar" />
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <small>{user.userTag}</small>
      </div>
      <div>
        <p>{birthday}</p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
        <div>
          <span>{age}</span>
        </div>
      </div>
    </>
  );
};

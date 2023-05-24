import { Header } from "../components/Layout/Header/Header";
import { Main } from "../components/Layout/Main/Main";
import { TopAppBar } from "../components/TopAppBar";
import { UserList } from "../components/UserList";

export const MainPage = () => {
  return (
    <>
      <Header title={"Главная страница приложения"} />
      <Main>
        <div>
          <TopAppBar />
          <UserList />
        </div>
      </Main>
    </>
  );
};

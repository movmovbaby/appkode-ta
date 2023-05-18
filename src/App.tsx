import { Main } from "./pages/Main";
import { TopAppBar } from "./components/TopAppBar";
import { UserList } from "./components/UserList";

function App() {
  return (
    <Main>
      <div>
        <TopAppBar />
        <UserList />
      </div>
    </Main>
  );
}

export default App;

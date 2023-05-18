import { SortingModal } from "./SortingModal";
import { DepartmentsFilter } from "./DepartmentsFilter";

export const TopAppBar = (): JSX.Element => {
  return (
    <>
      <h2>Поиск</h2>
      <form>
        <input type="text" placeholder="Введите имя, тег, почту..." />
      </form>

      <SortingModal />
      <DepartmentsFilter />
    </>
  );
};

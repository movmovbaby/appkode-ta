import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { SortingModal } from "./SortingModal";
import { DepartmentsFilter } from "./DepartmentsFilter";
import { sortFilterActions } from "../store/sortFilterReducer";

export const TopAppBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>();
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;
    setText(text);
    dispatch(sortFilterActions.setInputFilter(text));
  };

  return (
    <>
      <h2>Поиск</h2>
      <form>
        <input
          type="text"
          placeholder="Введите имя, тег, почту..."
          onChange={onInputChange}
        />
      </form>
      <p>{text}</p>
      <SortingModal />
      <DepartmentsFilter />
    </>
  );
};

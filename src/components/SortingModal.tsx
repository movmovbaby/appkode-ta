import { useState } from "react";
import { SortType } from "../store/sortFilterReducer";
import { sortFilterActions } from "../store/sortFilterReducer";
import { useAppDispatch } from "../store/hooks";

export const SortingModal = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onAlphabetSort = () => {
    dispatch(sortFilterActions.setSortType("alphabet"));
  };

  const onBirthDaySort = () => {
    dispatch(sortFilterActions.setSortType("birth-day"));
  };

  return (
    <div>
      <label htmlFor="alphabet">
        <input
          type="radio"
          name="sorting"
          id="alphabet"
          value="alphabet"
          defaultChecked={true}
          onChange={onAlphabetSort}
        />
        По алфавиту
      </label>

      <label htmlFor="birth-date">
        <input
          type="radio"
          name="sorting"
          id="birth-date"
          value="birth-date"
          onChange={onBirthDaySort}
        />
        По дню рождения
      </label>
    </div>
  );
};

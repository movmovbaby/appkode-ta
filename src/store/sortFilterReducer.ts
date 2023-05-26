import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortType = "alphabet" | "birth-day";

export type InputFilterType = string;

export type DepartmentFilterType =
  | "android"
  | "ios"
  | "design"
  | "management"
  | "analytics";

interface SortFilterState {
  sort: SortType;
  departmentFilter: DepartmentFilterType | null;
  inputFilter: InputFilterType | null;
}

const initialState: SortFilterState = {
  sort: "birth-day",
  departmentFilter: null,
  inputFilter: null,
};

const sortFilterSlice = createSlice({
  name: "sortAndFilter",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortType>) {
      console.log("sort action", action);
      state.sort = action.payload;
    },
    setDepartmentFilter(state, action: PayloadAction<DepartmentFilterType>) {
      console.log("department filter action", action);
      state.departmentFilter = action.payload;
    },
    resetDepartmentFilter(state) {
      state.departmentFilter = null;
    },
    setInputFilter(state, action: PayloadAction<InputFilterType>) {
      console.log("input filter action");
      state.inputFilter = action.payload;
    },
  },
});

export const { reducer: sortFilterReducer, actions: sortFilterActions } =
  sortFilterSlice;

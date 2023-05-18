import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortType = "alphabet" | "birth-day";

export type FilterType =
  | "android"
  | "ios"
  | "design"
  | "management"
  | "analytics";

interface SortFilterState {
  filter: FilterType | null;
  sort: SortType;
}

const initialState: SortFilterState = {
  sort: "alphabet",
  filter: null,
};

const sortFilterSlice = createSlice({
  name: "sortAndFilter",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortType>) {
      console.log("sort action", action);
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterType>) {
      console.log("filter action", action);
      state.filter = action.payload;
    },
    resetFilters(state) {
      state.filter = null;
    },
  },
});

export const { reducer: sortFilterReducer, actions: sortFilterActions } =
  sortFilterSlice;

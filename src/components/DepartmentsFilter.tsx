import { useAppDispatch } from "../store/hooks";
import { sortFilterActions } from "../store/sortFilterReducer";

export const DepartmentsFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleFilter = (event: any) => {
    event.preventDefault();
    const filter = event.target.dataset.filter;
    if (filter === "all") {
      dispatch(sortFilterActions.resetFilters());
    } else {
      dispatch(sortFilterActions.setFilters(filter));
    }
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          data-filter="all"
        >
          Все
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          data-filter="design"
        >
          Designers
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          data-filter="analytics"
        >
          Analyst
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          data-filter="ios"
        >
          iOS
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          data-filter="android"
        >
          Android
        </button>
      </div>
    </div>
  );
};

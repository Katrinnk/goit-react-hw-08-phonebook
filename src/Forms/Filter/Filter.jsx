import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'Redux/filter/selectors';
import { setFilter } from 'Redux/filter/slice';

export const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div className="mb-3 ms-3 me-3">
      <label htmlFor="filterContact" className="form-label">
        Find contacts by name
      </label>
      <input
        name="title"
        type="text"
        onChange={handleChangeFilter}
        className="form-control"
        id="filterContact"
        value={filter}
      />
    </div>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { LabelSearch, InputSearch } from './Filter.styled';
import { filterSet } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selektor';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(getFilter);

  const onChangeFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <LabelSearch>
      Find contacts by name:
      <InputSearch
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        required
        onChange={onChangeFilter}
      />
    </LabelSearch>
  );
};

import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearchBox }) => {
  return (
    <div>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={e => onSearchBox(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

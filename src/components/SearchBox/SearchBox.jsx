const SearchBox = ({ value, onSearchBox }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={value} onChange={e => onSearchBox(e.target.value)} />
    </div>
  );
};

export default SearchBox;

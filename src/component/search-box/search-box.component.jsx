import "./search-box.style.css";

export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <div>
      <input className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

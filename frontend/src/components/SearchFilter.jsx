function SearchFilter({ setDepartment }) {
  return (
    <input
      type="text"
      placeholder="Search by Department"
      onChange={(e) =>
        setDepartment(e.target.value)
      }
    />
  );
}

export default SearchFilter;
// create an input element: <input/>;
// read the input: onChange function;
// send the input result to the Users: setSearch(event.target.value);
const Search = ({ search, setSearch }) => {
  return (
    <input value={search} onChange={event => setSearch(event.target.value)} />
  );
};

export default Search;

// The other way to write the props object part is destructuring it outside the (parameter)
// const Search = ( props ) => {
// const { search, setSearch } = props;
//   return (
//     <input value={search} onChange={event => setSearch(event.target.value)} />
//   );
// };

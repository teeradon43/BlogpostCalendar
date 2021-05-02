import { Redirect } from "react-router";

const Searchbar = (params) => {
  console.log(params);
  return (
    <input
      type="search"
      className="search"
      placeholder={params.placeholder}
      onChange={params.handleChange}
      onSubmit={<Redirect to="/search" />}
    />
  );
};
export default Searchbar;

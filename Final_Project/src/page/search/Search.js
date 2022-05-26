import { useContext } from "react";
import Header from "../../components/header";
import SearchComponent from "../../components/search/Search";
import { UserContext } from "../../context/UserContext";


function Search() {
  // const {gitUsers} = useContext(UserContext);
  return (
    <>
      <Header />
      <SearchComponent />
    </>
  )
}

export default Search;

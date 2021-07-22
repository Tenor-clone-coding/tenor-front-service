import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

// components
import TrandingPage from "../components/TrandingPage";
import SearchBar from "../components/SearchBar";

const Search = (props) => {
  const search_result = useSelector((state) => state.post.search_list);
  const search_title = props.match.params.id
  React.useEffect(() => {
    console.log(props.match.params.id);
    // dispatch(userActions.getUserAX());
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
        <TrandingPage search_result={search_result} search_title={search_title}></TrandingPage>
    </React.Fragment>
  );
};



export default Search;

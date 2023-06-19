import { Fragment } from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import { updateHamburger } from "../../utils/hamburgerSlice";
import { search_apis } from "../../utils/constant";
import { addCache } from "../../utils/searchSlice";
import { userSearchedData } from "../../utils/searchVideoSlice";

const NavBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchValue]) {
        console.log("Hello");
        setSuggestion(cache[searchValue]);
      } else {
        searchSuggestApis();
      }
    }, 300);
    dispatch(
      addCache({
        searchValue: [suggestion],
      })
    );
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);
  const searchSuggestApis = async () => {
    const data = await fetch(search_apis + searchValue);
    const json = await data.json();

    setSuggestion(json[1]);
    dispatch(
      addCache({
        searchValue: json[1],
      })
    );
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <img
          onClick={() => {
            dispatch(updateHamburger());
          }}
          className={styles.hamburger}
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="hamburger"
        />
        <img
          className={styles.youtube}
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube"
        />
        <input
          onFocus={() => {
            setShowSuggestion(true);
          }}
          onBlur={() => {
            setShowSuggestion(false);
          }}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          className={styles.input}
          placeholder="search"
        />
        {showSuggestion && (
          <div className={styles.searchSuggestionontainer}>
            <ul className={styles.searchList}>
              {suggestion.map((item) => {
                return <li>🔍{item}</li>;
              })}
            </ul>
          </div>
        )}

        <img
          className={styles.search}
          onClick={() => {
            dispatch(userSearchedData(searchValue));
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png"
          alt="user"
        />

        <img
          className={styles.user}
          src="https://t3.ftcdn.net/jpg/05/06/55/22/360_F_506552238_j3Y4oq4rrlLEgzVG30AdEe0TaRINtUKr.jpg"
          alt="user"
        />
      </div>
    </Fragment>
  );
};
export default NavBar;

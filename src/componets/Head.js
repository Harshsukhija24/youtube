import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YouTube_search_api } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

// Constants for image sources
const MENU_ICON = "https://www.svgrepo.com/show/520763/hamburger.svg";
const YOUTUBE_LOGO = "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png";
const USER_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png";

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchValue, setSearchValue] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        setSuggest(searchCache[searchValue]);
      } else {
        getYouTubeValue();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const getYouTubeValue = async () => {
    const data = await fetch(YouTube_search_api + searchValue);
    const json = await data.json();
    setSuggest(json[1]);
    dispatch(
      cacheResults({
        [searchValue]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-gray-800 p-2">
      <div className="container mx-auto grid grid-flow-col items-center">
        <div className="flex items-center">
          <img
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer"
            alt="menu"
            src={MENU_ICON}
          />
          <a href="/">
            <img className="h-8 mx-2" alt="youtube logo" src={YOUTUBE_LOGO} />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            className="w-96 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none"
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
            placeholder="Search"
          />
          <button className="px-5 py-2 bg-red-500 rounded-md">🔍</button>
        </div>
        {showSuggestions && (
          <div className="absolute mt-12 w-96 bg-white py-2 px-3 shadow-lg rounded-md border border-gray-300">
            <ul>
              {suggest.map((s) => (
                <li key={s} className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <img className="h-8" alt="user" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Head;

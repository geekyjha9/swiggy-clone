import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [listOfRestaurent, setListOfRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    );

    const json = await data.json();

    setListOfRestaurent(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredList(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // if(filteredList.length === 0)  return <Shimmer />;

  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search"
          onClick={() => {
            // Filter the restaurent cards and update the UI
            // searchText
            console.log("Clicked");

            const filteredListBySearch =
              searchText.length === 0
                ? listOfRestaurent
                : listOfRestaurent.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );

            setFilteredList(filteredListBySearch);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRes = filteredList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredList(topRatedRes);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        <div className="res-card">
          {filteredList.map((restaurent) => (
            <a
              key={restaurent.info.id}
              href={"/restaurent/" + restaurent.info.id}
            >
              <RestroCard resData={restaurent} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

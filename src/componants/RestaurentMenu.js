import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/contents";
import { useParams } from "react-router-dom";
import useRestroMenuInfo from "../utils/useRestroMenuInfo";

const RestaurentMenu = () => {

  const { resId } = useParams();

  const restroMenuData = useRestroMenuInfo(resId);

  console.log(restroMenuData);

  if (restroMenuData === null) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    city,
  } = restroMenuData?.cards[0]?.card?.card?.info;

  const { cards } =
    restroMenuData?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR;

  const fliteredItemCards = cards.filter((e) =>
    e.card.card.itemCards === undefined ? false : true
  );

  const itemCards = fliteredItemCards.map((e) => {
    return e.card.card.itemCards;
  });


  return (
    <div className="res-menu-container">
      <div className="res-menu-img-container">
        <img className="res-image-in-menu" src={CDN_URL + cloudinaryImageId} />
      </div>

      <h1>{restroMenuData?.cards[0]?.card?.card?.info.name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>
        {locality}, {city}
      </p>
      <h3>Rs.{costForTwo / 100} cost for two</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return item.map((e) => (
            <li key={e.card.info.id}>
              {e.card.info.name} - Rs.{" "}
              {e.card.info.price / 100 || e.card.info.defaultPrice / 100}
            </li>
          ));
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;

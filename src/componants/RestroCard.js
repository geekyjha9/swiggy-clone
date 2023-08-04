import { CDN_URL } from "../utils/contents";

const RestroCard = (props) => {
    const { resData } = props;
  
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
      resData?.info;
    return (
      <div className="restro-card-container">
        <div className="restro-img-container">
          <img
            className="restro-img"
            src={
              CDN_URL +
              cloudinaryImageId
            }
          />
        </div>
        <div className="restro-details">
          <h3 className="res-name">{name}</h3>
          <h4 className="res-retting">{avgRating}</h4>
          <p className="res-cuisines">{cuisines.join(", ")}</p>
          <h4 className="res-costForTwo">{costForTwo}</h4>
          <h4 className="res-delivery-time">{sla.deliveryTime} minutes</h4>
        </div>
      </div>
    );
  };

  export default RestroCard;
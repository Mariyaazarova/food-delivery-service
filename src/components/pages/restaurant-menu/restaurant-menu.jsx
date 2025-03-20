import { Link, useParams } from "react-router-dom";
import { useGetMenuByRestaurantIdQuery } from "../../../redux/services/api/api";
import { CImage, CSpinner } from "@coreui/react";
import restaurant from "./restaurant.jpg";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMenuByRestaurantIdQuery(id);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }

  if (isError) {
    return "error restaurant-menu...";
  }

  if (!data || !data.length) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        {data.map((dish) => (
          <div key={dish.id}>
            <h4 className="m-4">
              <Link className="nav-link text-warning" to={`/dish/${dish.id}`}>
                <div>{dish.name} </div>
              </Link>
              <div className="fs-6 p-2">
                цена за единицу: {dish.price} &#8381;
              </div>
            </h4>
          </div>
        ))}
      </div>
      <div className="col-md-6">
        <CImage fluid src={restaurant} alt="restaurant" />
      </div>
    </div>
  );
};

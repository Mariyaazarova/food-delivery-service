import { Link, useParams } from "react-router-dom";
import {
  useGetMenuByRestaurantIdQuery,
  useGetRestaurantByIdQuery,
} from "../../../redux/services/api/api";
import { CImage, CSpinner } from "@coreui/react";

export const RestaurantMenu = () => {
  const { id } = useParams();

  const {
    data: menu,
    isLoading: menuLoading,
    isError: menuError,
  } = useGetMenuByRestaurantIdQuery(id);
  const {
    data: restaurant,
    isLoading: restaurantLoading,
    isError: restaurantError,
  } = useGetRestaurantByIdQuery(id);

  if (menuLoading || restaurantLoading) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }

  if (menuError || restaurantError) {
    return "error restaurant-menu...";
  }

  if (!menu || !menu.length || !restaurant) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        {menu.map((dish) => (
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
        <CImage fluid src={restaurant.img} alt="restaurant" />
      </div>
    </div>
  );
};

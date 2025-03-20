import { NavLink, Outlet } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../../redux/services/api/api";
import { CContainer, CSpinner } from "@coreui/react";

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="d-flex justify-content-center p-3">
          <CSpinner />
        </div>
      );
    if (isError) return "error page...";

    if (!data || !data.length) return null;

    return (
      <CContainer>
        <div className="nav nav-pills justify-content-center m-4 ">
          {data.map((restaurant) => (
            <NavLink
              className="nav-link invisible-button m-2 fs-5"
              aria-current="page"
              to={`/restaurants/${restaurant.id}`}
              key={restaurant.id}
            >
              {restaurant.name}
            </NavLink>
          ))}
        </div>

        <p>
          Мы приглашаем вас ознакомиться с коллекцией блюд нашего основного
          меню, собранной специально для гостей нашей платформы - Flavor
          Palette. Вдохновляясь лучшими ресторанами разных стран мира и России,
          мы объединили опыт мировых лидеров индустрии.
        </p>
        <Outlet />
      </CContainer>
    );
  };

  return <main className="body flex-grow-1">{renderContent()}</main>;
};

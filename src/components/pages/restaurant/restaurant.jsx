import {
  NavLink,
  Outlet,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useGetRestaurantByIdQuery } from "../../../redux/services/api/api";
import { CSpinner } from "@coreui/react";

export const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = useMatch("/restaurants/:id");
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  useEffect(() => {
    if (match) {
      navigate("menu", { replace: true, relative: true });
    }
  }, [navigate, match]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }
  if (isError) {
    return "error restaurant...";
  }

  if (!data) {
    return null;
  }

  return (
    <div className="m-4">
      <div className=" nav  nav-pills justify-content-center gap-2 col-6 mx-auto p-3 m-4">
        <NavLink
          className="nav-link invisible-button m-2 fs-5"
          aria-current="page"
          to={`/restaurants/${id}/menu`}
        >
          Посмотреть меню
        </NavLink>
        <NavLink
          className="nav-link invisible-button m-2 fs-5"
          to={`/restaurants/${id}/reviews`}
        >
          Посмотреть отзывы
        </NavLink>
      </div>
      <h3 className=" d-flex justify-content-end p-1 text-primary fst-italic ">
        Ресторан: {data.name}
      </h3>
      <div className=" d-flex justify-content-end p-1 fs-5 fst-italic ">
        {data.description}
      </div>
      <div className="m-4">
        <Outlet />
      </div>
    </div>
  );
};

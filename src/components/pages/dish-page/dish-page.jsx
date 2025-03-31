import { Link, useParams } from "react-router-dom";
import { useGetDishQuery } from "../../../redux/services/api/api";
import { DishCounter } from "../../dish-counter/dish-counter";
import { CContainer, CSpinner } from "@coreui/react";
import { Cart } from "../../cart/cart";
import { cilCheckCircle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishQuery(dishId);

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="d-flex justify-content-center p-3">
          <CSpinner />
        </div>
      );
    if (isError) return "error dish-page...";
    if (!dish) return null;

    return (
      <CContainer>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end  mb-4">
          <div className="btn btn-primary me-md-2">
            <Link className="nav-link " to="/restaurants">
              к выбору ресторанов
            </Link>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-5 border-end">
            <div className="mb-5">
              <h3 className="text-primary fst-italic mb-4">{dish.name}</h3>
              <div className=" mb-5">
                <CIcon icon={cilCheckCircle} size="lg" /> Доступен для доставки
              </div>
              <p> {dish.description}</p>
              <p className="mb-5 fst-italic">
                ингредиенты: {dish.ingredients.join(",")}
              </p>
              <p className="fw-bolder">цена за единицу: {dish.price} &#8381;</p>
            </div>
            <div>
              <DishCounter id={dishId} />
            </div>
          </div>
          <div className="col-md-6">
            <Cart />
          </div>
        </div>
      </CContainer>
    );
  };

  return <main className="body flex-grow-1 p-3">{renderContent()}</main>;
};

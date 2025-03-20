import { DishCounter } from "../dish-counter/dish-counter";
import { deleteCartEntry } from "../../redux/entities/cart/cart-slice";
import { useDispatch } from "react-redux";
import { useGetDishQuery } from "../../redux/services/api/api";
import { CSpinner } from "@coreui/react";

export const CartItem = ({ id }) => {
  const dispatch = useDispatch();
  const { data: dish, isLoading, isError } = useGetDishQuery(id);

  const handleRemoveAll = () => {
    dispatch(deleteCartEntry(id));
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }

  if (isError) {
    return "error dish...";
  }

  if (!dish) {
    return;
  }

  return (
    <div className=" d-flex row mb-4 ">
      <div className="col-md-5 fs-5 ">{dish.name}</div>
      <div className="col-md-4 d-flex justify-content-end">
        <DishCounter id={id} />
      </div>
      <button
        type="button"
        className="btn-close col-md-3 d-flex justify-content-end"
        aria-label="Close"
        onClick={handleRemoveAll}
      ></button>
      <div className="col-md-2 d-flex justify-content-end fw-bolder">
        {dish.price} &#8381;
      </div>
    </div>
  );
};

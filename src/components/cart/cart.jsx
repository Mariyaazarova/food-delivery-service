import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectCartItems,
  showNotification,
} from "../../redux/entities/cart/cart-slice";
import { CartItem } from "./cart-item";
import { CContainer } from "@coreui/react";
import { useState } from "react";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [isOrdering, setIsOrdering] = useState(false);

  const handleOrderClick = () => {
    setIsOrdering(true);
    dispatch(
      showNotification({
        message: "Ваш заказ создан",
        type: "success",
      })
    );

    setTimeout(() => {
      dispatch(clearCart());
    }, 3000);
  };

  if (!items.length) {
    return null;
  }

  return (
    <CContainer>
      <h3 className="text-primary fst-italic border-bottom mb-4">Корзина </h3>
      <div className="border-bottom mb-4">
        {items.map(({ id }) => (
          <div key={id}>
            <CartItem id={id} />
          </div>
        ))}
      </div>
      {isOrdering && (
        <div className="alert alert-primary" role="alert">
          Ваш заказ создан
        </div>
      )}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleOrderClick}
      >
        Заказать
      </button>
    </CContainer>
  );
};

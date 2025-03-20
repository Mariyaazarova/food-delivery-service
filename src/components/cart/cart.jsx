import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/cart-slice";
import { CartItem } from "./cart-item";
import { CContainer } from "@coreui/react";

export const Cart = () => {
  const items = useSelector(selectCartItems);

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
      <button type="button" className="btn btn-outline-primary">
        Заказать
      </button>
    </CContainer>
  );
};

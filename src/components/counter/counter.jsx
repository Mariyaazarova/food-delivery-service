import { cilMinus, cilPlus } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <>
      <button
        type="button"
        className="btn me-2 btn-outline-secondary"
        onClick={decrement}
      >
        <CIcon icon={cilMinus} size="lg" />
      </button>
      {value}
      <button
        type="button"
        className="btn ms-2 me-2 btn-outline-secondary"
        onClick={increment}
      >
        <CIcon icon={cilPlus} size="lg" />
      </button>
    </>
  );
};

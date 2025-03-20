import { CButtonGroup, CFormCheck, CFormTextarea } from "@coreui/react";
import { useAuth } from "../../components/context/auth-context/use-auth";
import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";

export const ReviewForm = ({ onSubmit, initialValues }) => {
  const { auth } = useAuth();
  const { form, setText, incrementRating, decrementRating, clearForm } =
    useForm(initialValues);

  const { text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, rating, userId: auth.userId });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex docs-highlight">
          <div className="p-2 flex-grow-1 docs-highlight">
            <div className="form-floating ">
              <CFormTextarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                floatingLabel="Comments"
                style={{ height: "100px", width: "90%" }}
              ></CFormTextarea>
            </div>
          </div>

          <div className="p-2 docs-highlight">
            <div> &#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <br />
            <Counter
              value={rating}
              increment={incrementRating}
              decrement={decrementRating}
            />
          </div>
        </div>
        <br />
        <CButtonGroup
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <CFormCheck
            button={{ color: "primary", variant: "outline" }}
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            label="Очистить"
            type="submit"
            onClick={clearForm}
          />
          <CFormCheck
            button={{ color: "primary", variant: "outline" }}
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            label={initialValues ? "Сохранить" : "Опубликовать"}
            type="submit"
          />
        </CButtonGroup>
      </form>
    </div>
  );
};

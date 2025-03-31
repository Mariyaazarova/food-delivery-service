import { CButtonGroup, CFormCheck, CFormTextarea } from "@coreui/react";
import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";

export const ReviewForm = ({ onSubmit, initialValues }) => {
  const { form, setText, incrementRating, decrementRating, clearForm } =
    useForm(initialValues);

  const { text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      text,
      rating,
      userId: "a304959a-76c0-4b34-954a-b38dbf310360",
    });
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
                placeholder="Оставьте комментарий здесь"
                id="floatingTextarea2"
                floatingLabel="Комментарии"
                style={{ height: "100px", width: "90%" }}
              ></CFormTextarea>
            </div>
          </div>

          <div className="p-2 docs-highlight">
            <div>Оценка</div>
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

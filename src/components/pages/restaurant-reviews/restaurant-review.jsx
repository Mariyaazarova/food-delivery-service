import { useState } from "react";
import { ReviewForm } from "../../review-form/review-form";
import { User } from "./restaurant-user";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

export const Review = ({ review, handleEditReview }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { id, userId, text, rating } = review;

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = (updatedReview) => {
    handleEditReview(id, updatedReview);
    toggleEditMode();
  };

  return (
    <div className="callout callout-light">
      <User id={userId} />
      {isEditing ? (
        <ReviewForm
          initialValues={{ text: text, rating: rating }}
          onSubmit={handleSaveChanges}
        />
      ) : (
        <div className="d-flex docs-highlight">
          <div className="p-2 w-100 docs-highlight">
            <div>{text}</div>
            <br />
            <div>{rating} из 5 &#9733;</div>
          </div>
          <div className="p-2 flex-shrink-1 docs-highlight">
            {userId === "a304959a-76c0-4b34-954a-b38dbf310360" && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={toggleEditMode}
              >
                <CIcon icon={cilPencil} size="lg" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

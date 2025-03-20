import { useState } from "react";
import { ReviewForm } from "../../review-form/review-form";
import { User } from "./restaurant-user";
import { useAuth } from "../../context/auth-context/use-auth";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

export const Review = ({ review, handleEditReview }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { auth } = useAuth();

  const { id, userId, text, rating } = review;

  const toggleEditMode = () => {
    if (auth.isAuthorized && auth.userId === userId) {
      setIsEditing(!isEditing);
    }
  };

  const handleSaveChanges = (updatedReview) => {
    if (auth.isAuthorized && auth.userId === userId) {
      handleEditReview(id, updatedReview);
      toggleEditMode();
    }
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
            {auth.isAuthorized && auth.userId === userId && (
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
